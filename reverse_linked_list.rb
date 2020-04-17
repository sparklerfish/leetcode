def reverse_linked_list(head)
    curr_node = head
    prev_node = nil
    next_node = nil

    while curr_node
        next_node = curr_node.next
        curr_node.next = prev_node

        prev_node = curr_node
        curr_node = next_node
    end

    head = prev_node
end