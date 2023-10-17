# Tree

A tree is a data structure that represents a hierarchical relationship between elements. Trees are widely used in various applications.

## Some terminologies

__Nodes:__ Each node in a tree contains data or information and can have zero or more child nodes. Nodes are connected by edges, representing the relationships between them.

__Root:__ The root of a tree is the topmost node and serves as the starting point for traversing the tree. It does not have any parent nodes but may have child nodes.

__Parent, Child, & Sibling Nodes:__ A parent node is a node that has child nodes directly connected to it. Child nodes are nodes directly connected to a parent node. Each child node has one parent node. Nodes that share the same parent node are called sibling nodes.

__Leaf Nodes:__ Leaf nodes, also known as terminal nodes, are nodes that have no child nodes. They represent the endpoints of the tree branches.

__Path:__ A path in a tree refers to the sequence of nodes and edges from one node to another. It represents the route or traversal from the starting node to the destination node.

The terms depth and height are used to define the structure of a tree. They help us understand how deep or how tall the tree is and provide insight into its characteristics.

The depth of a node refers to the number of edges along the path from the root node to the particular node.

The height of a node refers to the number of edges along the longest path from that node to a leaf node. It measures how far a node is from the deepest leaf node in a tree.

The height of a tree is the same as the height of its root node.

## Binary tree

- Has 1 root node.
- Has at most, 2 children per node.
- Has 1 path between the root and any one node.
