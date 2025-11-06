function topKFrequent(nums: number[], k: number): number[] {

    const frecuencyHash: Map<number,number> = new Map<number,number>();
    const heap = new MaxPriorityQueue<number[]>(([num, count]) => count);
    const result = [];

    //Populate map
    for(const n of nums){
        frecuencyHash.set(n, (frecuencyHash.get(n) || 0) + 1 )    
    }

    //Populate heap.
    for (const [num, frequency] of repeatedHash) {
        heap.enqueue([num, frequency]);
    }

    //Populate result
    for (let i = 0; i < k; i++) {
        const [num, count] = heap.dequeue() as number[];
        result.push(num);
    }

    return result;
};