class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right= null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
            return current;
        }
    }
    bfs() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        let data = [],
            current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data
    }
    DFSInOrder() {
         let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(21);
tree.insert(2);
tree.insert(7);
console.log(tree.find(5))
