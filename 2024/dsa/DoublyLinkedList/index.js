// class Node {
//     constructor(val) {
//         this.val = val,
//         this.next = null,
//         this.prev = null
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null,
//         this.tail = null,
//         this.length = 0
//     }
//     push(val) {
//         let newNode = new Node(val)
//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }
//     pop() {
//         if (!this.head) {
//             return undefined
//         } else {
//             let poppedNode = this.tail
//             if (this.length === 1) {
//                 this.head = null;
//                 this.tail = null;
//             } else {
//                 this.tail = poppedNode.prev;
//                 this.tail.next = null;
//                 poppedNode.prev = null;
//             }
//             this.length--
//             return poppedNode
//         }
//     }
//     shift() {
//         if (!this.head) {
//             return undefined
//         } else {
//             let oldHead = this.head;
//             if (this.length === 1) {
//                 this.head = null;
//                 this.tail = null
//             } else {
//                 this.head = oldHead.next;
//                 this.head.prev = null;
//                 oldHead.next = null;
//             }
//             this.length--
//             return oldHead
//         }
//     }
//     unshift(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode
//         } else {
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this
//     }
//     get(index) {
//         if (index < 0 || index > this.length) {
//             return null
//         } else if (index <= this.length / 2) {
//             let count = 0;
//             let current = this.head
//             while (count !== index) {
//                 current = current.next;
//                 count++
//             }
//             return current
//         } else {
//             let count = this.length -1 ;
//             let current = this.tail
//             while (count !== index) {
//                 current = current.prev;
//                 count--
//             }
//             return current
//         }
//     }
//     set(index, val) {
//         const newNode = new Node(val);
//         let foundIndex = this.get(index);
//         if (foundIndex !== null) {
//             foundIndex.val = val;
//             return true
//         }
//     }
//     insert(index, val) {
//         if (index < 0 || index > this.length) return false
//         if (index === 0) return this.unshift(val);
//         if (index === this.length) return this.push(val);
//         let newNode = new Node(val);
//         let beforeNode = this.get(index - 1);
//         let afterNode = beforeNode.next;
//         beforeNode.next = newNode;
//         newNode.prev = beforeNode;
//         newNode.next = afterNode;
//         afterNode.prev = newNode;
//         this.length++;
//         return true;
//     }
//     remove(index) {
//         if (index < 0 || index > this.length) return undefined;
//         if (index === 0) return this.shift();
//         if (index === this.length-1) return this.push();
//         let removeNode = this.get(index);
//         removeNode.prev.next = removeNode.next;
//         removeNode.next.prev = removeNode.prev;
//         removeNode.next = null;
//         removeNode.prev = null;
//         this.length--;
//         return removeNode;
//     }
// }

// const list = new DoublyLinkedList();
// list.push(10)
// list.push(20)
// list.push(30)


class Node{
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null
        this.tail = null;
        this.length = 0
    }
    push(val){
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this
    }
    pop() {
        if (!this.head) return false;
        else {
            if (this.length === 1) {
                this.head = null;
                this.tail = null
            }
            let poppedNode = this.tail;
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null
            this.length--;
            return poppedNode
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this
    }
    shift() {
        if(this.length === 0) return undefined;
        else {
            let oldHead = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = oldHead.next;
                this.head.prev = null;
                oldHead.next = null
            }
            this.length--;
            return oldHead
        }
    }
    get(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        if (index < this.length / 2) {
            let count = 0;
            let currentNode = this.head;
            while (count !== index) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode
        }
        else {
            let count = this.length -1 ;
            let currentNode = this.tail;
            while (count !== index) {
                currentNode = currentNode.prev;
                count--;
            }
            return currentNode
        }
    }
    set(index, val) {
        const newNode = new Node(val);
        let foundIndex = this.get(index);
        if (foundIndex !== null) {
            foundIndex.val = val;
            return true
        }
    }
}

const list = new DoublyLinkedList();
list.push(10)
list.push(20)
list.push(30)

