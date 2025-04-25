class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    prepend(val) {
        let newNode = new Node(val);
        if (this.count === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.count++;
    }

    append(val) {
        let newNode = new Node(val);
        if (this.count === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;
    }

    insertAt(val, idx) {
        if (idx < 0 || idx > this.count) {
            console.log('Not a valid index');
            return;
        }

        let newNode = new Node(val);

        if (idx === 0) {
            if (this.count === 0) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else if (idx === this.count) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            let curr = this.head;
            for (let i = 0; i < idx; i++) {
                curr = curr.next;
            }
            newNode.next = curr;
            newNode.prev = curr.prev;
            curr.prev.next = newNode;
            curr.prev = newNode;
        }
        this.count++;
    }

    deleteAt(idx) {
        if (idx < 0 || idx >= this.count) {
            console.log('Please enter a valid index');
            return;
        }

        if (idx === 0) {
            if (this.count === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (idx === this.count - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let curr = this.head;
            for (let i = 0; i < idx; i++) {
                curr = curr.next;
            }
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
        }
        this.count--;
    }

    reverse() {
        let curr = this.head;
        let temp = null;
        while (curr !== null) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        if (temp !== null) {
            this.head = temp.prev;
        }
    }

    find(val) {
        let curr = this.head;
        let idx = 0;
        while (curr !== null) {
            if (curr.data === val) {
                return idx;
            }
            curr = curr.next;
            idx++;
        }
        return -1;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    getAt(idx) {
        if (idx < 0 || idx >= this.count) {
            console.log('Please enter a valid index');
            return null;
        }
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            curr = curr.next;
        }
        return curr.data;
    }

    setAt(val, idx) {
        if (idx < 0 || idx >= this.count) {
            console.log('Please enter a valid index');
            return;
        }
        let curr = this.head;
        for (let i = 0; i < idx; i++) {
            curr = curr.next;
        }
        curr.data = val;
    }

    toArray() {
        let arr = [];
        let curr = this.head;
        while (curr !== null) {
            arr.push(curr.data);
            curr = curr.next;
        }
        return arr;
    }

    printReverse() {
        let curr = this.tail;
        while (curr !== null) {
            console.log(curr.data);
            curr = curr.prev;
        }
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const dll = new DoubleLinkedList();

dll.prepend(1);
dll.prepend(2);
dll.append(3);
dll.insertAt(4, 1);
dll.deleteAt(1);
dll.reverse();

dll.print();
console.log(dll.toArray());
dll.printReverse();
