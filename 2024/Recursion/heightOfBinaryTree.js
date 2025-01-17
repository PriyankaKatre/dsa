class treeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const heightOfBinaryTree = (root) => {
    if (root === null) return 0;
    const leftHeight = heightOfBinaryTree(root.left);
    const rightHeight = heightOfBinaryTree(root.right)
    return Math.max(leftHeight, rightHeight) + 1
}

const root = new treeNode(1)
root.left = new treeNode(2)
root.right = new treeNode(3);
console.log(root)
console.log(heightOfBinaryTree(root));
