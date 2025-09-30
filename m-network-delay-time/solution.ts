
// [[2,1,1],[2,3,2],[3,4,1]], n = 4, k = 2

// Simple MinPriorityQueue implementation using a binary heap
class MinPriorityQueue<T> {
    private heap: { item: T, priority: number }[] = [];
    private getPriority: (item: T) => number;

    constructor(getPriority: (item: T) => number) {
        this.getPriority = getPriority;
    }

    push(item: T) {
        this.heap.push({ item, priority: this.getPriority(item) });
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): T {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        const min = this.heap[0].item;
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return min;
    }

    size(): number {
        return this.heap.length;
    }

    private bubbleUp(idx: number) {
        const element = this.heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (element.priority >= parent.priority) break;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
        this.heap[idx] = element;
    }

    private bubbleDown(idx: number) {
        const length = this.heap.length;
        const element = this.heap[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swap = null;

            if (leftIdx < length) {
                if (this.heap[leftIdx].priority < element.priority) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                if (
                    this.heap[rightIdx].priority < (swap === null ? element.priority : this.heap[leftIdx].priority)
                ) {
                    swap = rightIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            idx = swap;
        }
        this.heap[idx] = element;
    }
}

/**
 * As we saw in Advanced Algorithms and Data Structures, in d-heary heps chapter (2.8) Most use cases, we made use of a MinPriorityQueue
 * to implement Dijkstra's algorithm. Here we will use it again to solve this problem.
 * The idea is to use a priority queue to explore the graph in order of increasing travel time.
 * We start from the starting node k and add all its neighbors to the priority queue with their respective travel times. Then, we repeatedly extract the node with the smallest travel time from the priority queue, mark it as visited, and add its unvisited neighbors to the priority queue with their cumulative travel times.
 * We continue this process until we have visited all nodes or the priority queue is empty.
 * If we have visited all nodes, the maximum travel time among the visited nodes is the answer. If not, it means that some nodes are unreachable from the starting node, and we return -1.
 **/
function networkDelayTime(times: number[][], n: number, k: number): number {
    const adjGraph: Array<[number,number]>[] = Array.from({ length: n }, () => []) 
    for (let [s, d, w] of times) {
        adjGraph[s - 1].push([d - 1, w])
    }

    const visited = new Set<number>()
    const heap = new MinPriorityQueue<[number, number]>(([,tw]) => tw)
    heap.push([k-1, 0]) 
    
    while (heap.size() !== 0) {
        const [s, tw] = heap.pop() 
        if (visited.has(s)) continue 
        visited.add(s) 
        
        if(visited.size === n) return tw 
        
        for (let [d, w] of adjGraph[s]) { 
            heap.push([d, w + tw])
        }
    }
    
    return -1
};