class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdges(v1, v2) {
        if (!this.adjacencyList[v1]) {
            this.addVertex(v1)
        }
         if (!this.adjacencyList[v2]) {
            this.addVertex(v2)
        }
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1)
    }
    removeAge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let item of this.adjacencyList[vertex]) {
            this.removeAge(vertex, item)
        }

        delete this.adjacencyList[vertex]
    }
}

const newgraph = new Graph()
newgraph.addVertex('Tokio');
newgraph.addVertex('Dallas');
newgraph.addVertex('Spain');
newgraph.addVertex('Spains');
newgraph.addEdges('Spain', 'Dallas');
newgraph.addEdges('Spain', 'London');
newgraph.removeVertex('Spain')
console.log(newgraph)
