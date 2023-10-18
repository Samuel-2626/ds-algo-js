# Binary Search Tree

A Binary Search Tree (BST) is a specific type of binary tree that follows a particular ordering and sorting property.

While the ordering rule is commonly associated with numeric values, it's important to note that binary search trees can handle various types of data, not just numbers. One of the key advantages of binary search trees is they're versatile enough to accommodate any data type that can be compared for ordering.

## Rules of a BST

- Each node has at most two child nodes, referred to as the left child and the right child.
- The left child's value is less than the parent node's value.
- The right child's value is greater than or equal to the parent node's value.

For a valid BST, everything on the left is less than its parent and everything on the right is greater than the parent. This does not only apply to immediate child nodes.

The time complexity of search, insertion, and deletion operations in a binary search tree is `O(log n)`, where `n` is the number of nodes in the tree. This is because the search space is reduced by half at each step.

This type of searching is much more efficient than a linear search, which instead goes through each element one by one and has a time complexity of O(n).
