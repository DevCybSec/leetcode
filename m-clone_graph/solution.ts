
class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}


function cloneGraph(node: _Node | null): _Node | null {
	
  if (node === null) return null;

  // map original -> clone
  const cloned = new Map<_Node, _Node>();
  const firstNode = new _Node(node.val, []);
  cloned.set(node, firstNode);

  // BFS over the ORIGINAL graph
  const queue: _Node[] = [node];
  let head = 0;

  while (head < queue.length) {
    const curr = queue[head++];
    const currClone = cloned.get(curr)!;

    for (const neigh of curr.neighbors) {
      if (!cloned.has(neigh)) {
        // first time we see this original neighbor: create its clone and enqueue original
        cloned.set(neigh, new _Node(neigh.val, []));
        queue.push(neigh);
      }
      // connect the clone neighbors
      currClone.neighbors.push(cloned.get(neigh)!);
    }
  }

  return firstNode;
};