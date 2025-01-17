class BinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element);
        this.bubbleup()
    }
    bubbleup() {
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0 ) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex
        }
    }
}

const heap = new BinaryHeap();
console.log(heap.insert(40))
console.log(heap.insert(35))
console.log(heap.insert(30))
console.log(heap.insert(25))
console.log(heap.insert(20))
console.log(heap.insert(15))
console.log(heap.insert(10))
console.log(heap.insert(55))
