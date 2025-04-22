class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        } else if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removed;
        if (index === 0) {
            removed = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removed = prev.next;
            prev.next = removed.next;
        }
        this.size--;
        return removed.value;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }

    printList() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let listValue = '';
            while (curr) {
                listValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValue.trim());
        }
    }

    toArray() {
        let data = [];
        let current = this.head;
        while (current) {
            data.push(current.value);
            current = current.next;
        }
        return data;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1; // Value not found
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    contains(value) {
        return this.find(value) !== -1;
    }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.remove(3);
linkedList.reverse();
linkedList.printList(); // Output: 4 3 1
console.log(linkedList.toArray()); // Output: [4, 3, 1]
console.log(linkedList.find(3)); // Output: 1
console.log(linkedList.getNodeAt(1)); // Output: Node { value: 3, next: Node { value: 1, next: null } }
console.log(linkedList.contains(1)); // Output: true
linkedList.clear();
console.log(linkedList.isEmpty()); // Output: true




//constructors

function Node (val) {
		this.data = val;
		this.next = null
}

function LinkedList () {
	this.head = null;
	this.size = 0;

	this.append = function (val) {
		let newNode = new Node(val);
		if(this.size === 0) {
			this.head = newNode
		}
		else {
			let current = this.head
			while(current.next) {
				current = current.next
			}
			current.next = newNode
		}
		this.size++;
		return this.node
	}

	this.list = function () {
		let result = []
		let current = this.head
		while(current) {
            result.push({ data: current.data, next: current.next ? current.next.data : null });

			current= current.next
		}
		return result
		
	}
}

let List = new LinkedList()
List.append(1);
List.append(2);
List.append(3);
List.append(4)


console.log(List)





// Clousers

function Node (val){
	return{
		data:val,
		next:null
	}
}

function LinkedList(){
	let head= null;
	let count = 0

	function append(val){
		const newNode = new Node(val);
		if(count === 0) {
			head = newNode
		}else {
			let curr = head;
			while(curr.next) {
				curr = curr.next;
			}
			curr.next = newNode
		}
		count++
	}
	function list(){
		let result = [];
		let curr = head;
		while(curr) {
			result.push({data: curr.data, next:curr.next? curr.next.data:null})
			curr= curr.next
		}
		return result
	}

	return {
		append,
		list
	}
}

let List = new LinkedList()
List.append(1);
List.append(2);
List.append(3);
List.append(4)
console.log(List.head)
console.log(List.count)
console.log(List.list())
