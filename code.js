function convertToAdjList(adjMatrix) {
    // Create an empty list to store the converted graph
    const adjacencyList = [];
    // loop through each row in the matrix
    for (let i = 0; i < adjMatrix.length; i++) {
        // Create an empty list for each vertex
        adjacencyList[i] = [];
        // Go through each column in the current row
        for (let j = 0; j < adjMatrix[i].length; j++) {
            // If there's a 1, there's an edge from i to j
            if (adjMatrix[i][j] === 1) {
                // Add j to the list of connections for i
                adjacencyList[i].push(j);
            }
        }
    }
    // Return the completed adjacency list
    return adjacencyList;
}
