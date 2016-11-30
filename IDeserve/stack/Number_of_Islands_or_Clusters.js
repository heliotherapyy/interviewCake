var createMatrix = function(rows, cols) {
        var matrix = [];
        for (var i = 0; i < rows; i++) {
                    var row = [];
                            for (var j = 0; j < cols; j++) {
                                            row.push(0);
                            }
                            matrix.push(row);
        }
        return matrix;
}


var printMatrix = function(matrix) {
        var rows = matrix.length;
            var cols = matrix[0].length;
                for (var i = 0; i < rows; i++) {
                            console.log(matrix[i]);
                }
}




// Setting
var matrix = createMatrix(3, 5);
matrix[0][0] = matrix[1][0] = matrix[1][1] = matrix[2][1] = matrix[0][2] = matrix[0][4] = matrix[2][3] = matrix[2][4] = 1;


printMatrix(matrix);


// Number of Islands or Clusters
var countClusters = function(matrix) {
        var rows = matrix.length;
            var cols = matrix[0].length;
                var count = 0;
                    var Visited = {};


                        for (var row = 0; row < rows; row++) {
                                    for (var col = 0; col < cols; col++) {
                                                    if (!Visited[[row, col]]) {
                                                                        if (matrix[row][col] === 1) count++;
                                                                                        DFS(matrix, row, col, Visited);
                                                    }
                                    }
                        }


                        return count;
}


// helpers
var visit = function(Visited, row, col) {
        var data = [row, col];
        Visited[data] = true;
}


var DFS = function(matrix, row, col, Visited) {
        var count = 0;


            visit(Visited, row, col);
                if (matrix[row][col] === 0) return;


                    var neighbors = findNeighbors(row, col);
                        for (var i = 0; i < neighbors.length; i++) {
                                    var neighbor = neighbors[i];
                                            if (isValid(neighbor, matrix) && !Visited[neighbor]) {
                                                    var newRow = neighbor[0];
                                                        var newCol = neighbor[1];
                                                            DFS(matrix, newRow, newCol, Visited);
                                            }
                        }
}


var findNeighbors = function(row, col) {
        var result = [];
            
                result.push([row - 1, col - 1]);
                    result.push([row - 1, col]);
                        result.push([row - 1, col + 1]);
                            result.push([row, col - 1]);
                                result.push([row, col + 1]);
                                    result.push([row + 1, col - 1]);
                                        result.push([row + 1, col]);
                                            result.push([row + 1, col + 1]);


                                                return result;
}


var isValid = function(neighbor, matrix) {
        var rows = matrix.length;
            var cols = matrix[0].length;


                var row = neighbor[0];
                    var col = neighbor[1];
                        
                            if (row < 0 || row > rows - 1 || col < 0 || col > cols - 1) return false;
                                else if (matrix[row][col] === 1) return true;
                                    else return false;
}


countClusters(matrix);

