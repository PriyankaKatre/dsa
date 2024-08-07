const validPath = (n, edges, source, destination) => {
    let graph = new Map();
    let visited = new Set();
    for (let [v, e] of edges) {
        console.log('v', v)
        console.log('e', e)
        if (graph.has(v)) {
            graph.get(v).push(e)
        } else {
            graph.set(v, [e])
        }
        if (graph.has(e)) {
            graph.get(e).push(v)
        } else {
            graph.set(e, [v])
        }
    }

    const dfs = (vertex) => {
        visited.add(vertex)

        let neighbours = graph.get(vertex);
        if (neighbours && neighbours.length > 0) {
            for(let i = 0; i < neighbours.length; i++) {
                if (!visited.has(neighbours[i])) {
                    dfs(neighbours[i])
                }
            }
        }
    }
    dfs(source)
    return visited.has(destination)
}


console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))
//console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5))
//validPath(n, edges, source, destination)
