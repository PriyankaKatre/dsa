class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(props) {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head;
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            console.log('first value inserted')
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++;
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        } else if (index === 0) {
           this.prepend(value)
        } else {
            const node = new Node(value);
            const prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeFrom(index) {
		let removed
		if(index < 0 || index > this.size) {
			return null
		}	
		else if(index === 0) {
			removed = this.head
			this.head = this.head.next
		}else {
			let prev = this.head;
			for(let i = 0; i < index-1; i++) {
				prev = prev.next
			}
			prev.next = prev.next.next
			
		}
		this.size--
	}
    print() {
        if (this.isEmpty()) {
            console.log('list is empty')
        }
        else {
            let curr = this.head;
            let listValue = '';
            while (curr) {
                listValue += `${curr.value }`;
                curr = curr.next;
            }
            console.log(listValue)
        }
    }

}


const list = new LinkedList();
console.log('List is empty', list.isEmpty())
// list.print()

// list.append(10)
// list.print()

// list.append(20)

// list.append(30)
// list.print()
list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()

list.insert(30, 1)
list.print()

