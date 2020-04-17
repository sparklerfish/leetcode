function reverseLinkedList(head) {

    if (!head.next) return head;
    let curr = head;
    let next = null;
    let prev = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    head = prev;
    return head;
}