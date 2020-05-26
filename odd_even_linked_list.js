var oddEvenList = function (head) {
    if (!head) return head;

    let oddNode = head;
    let evenHead = head.next;
    let evenNode = evenHead;

    while (oddNode.next && oddNode.next.next) {
        oddNode.next = oddNode.next.next;
        evenNode.next = evenNode.next.next;
        oddNode = oddNode.next;
        evenNode = evenNode.next;
    }

    oddNode.next = evenHead;
    return head;
};