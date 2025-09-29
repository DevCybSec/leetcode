
//Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function maxDepth(root: TreeNode | null): number {
    return depth(root,0);
};

function depth(node: TreeNode | null, d: number): number {
  if (node === null) return d;
  const left = depth(node.left, d + 1);
  const right = depth(node.right, d + 1);
  return Math.max(left, right);
}

/* Improved version */
function maxDepthImproved(root: TreeNode | null): number {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}