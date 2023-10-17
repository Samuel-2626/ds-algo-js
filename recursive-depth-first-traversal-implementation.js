

class Node {

    constructor(data) {

        this.data = data
        this.left = null
        this.right = null

    }

}


function recDepthFirstTraversal(root) {

    const result = []

    function traverse(node) {
        if (node !== null) {
            result.push(node.data)
            traverse(node.left)
            traverse(node.right)
        }
    }


    traverse(root)
    return result
    
}


const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');

console.log(recDepthFirstTraversal(root));