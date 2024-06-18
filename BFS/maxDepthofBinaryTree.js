const maxDepth = (root) => {
    if (!root) {
        return 0;
    }
    let depth = 0;
    let queue = [root]
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let current = queue.shift();
            console.log('current', current)
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        depth++
    }
    return depth
}
console.log(maxDepth([3, 9 ,20, null, null, 15, 7]))
