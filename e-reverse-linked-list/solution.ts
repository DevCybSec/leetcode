class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}



function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;
    while (curr !== null) {
        const nextNode = curr.next; // Save next node
        curr.next = prev; // Reverse the pointer
        prev = curr; // Move prev forward
        curr = nextNode; // Move curr forward
    }
    return prev;
}