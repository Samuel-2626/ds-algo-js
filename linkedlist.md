# Linked list

A linked list is a linear data structure that is made up of a series of nodes.

Each node contains a value and a pointer.

A pointer can mean a lot of different things in programming, in the case of a linked list, it is a reference to another node in the list.

The first node in the list is called the head.

The last node in the list is called the tail.

The tail's pointer points to null to indicate that it is the last node in the list.

Elements can be added or removed from both the head and the tail.

Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node in a linked list contains a pointer to the next node.

This can be very efficient in certain ways, such as inserting and deleting data. It just involves changing a few pointers and can have an O(1) time complexity.
