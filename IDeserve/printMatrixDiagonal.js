var createMatrix = function(m, n) {
  var matrix = [];
  var num = 1;
  for (var i = 0; i < m; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      row.push(num++);
    }
    matrix.push(row);
  }
  return matrix;
}

var printMatrix = function(matrix) {
  for (var i = 0; i < matrix.length; i++) {
      console.log(matrix[i]);
  }
}

var matrix = createMatrix(4,5);
printMatrix(matrix);

/*
1
6  2
11 7 3
12 8 4
13 9 5
14 10
15
*/

console.log();

var printDiagonal = function(matrix, memoize, rows, cols) {

  memoize = (!memoize) ? initialize(matrix, memoize) : memoize;
  rows = (!rows) ? matrix.length : rows;
  cols = (!cols) ? 0 : cols;

  update(matrix, memoize, rows, cols);

  return memoize;
}

var initialize = function(matrix, memoize) {
  var memoize = [];
  var rows = matrix.length;
  var cols = matrix[0].length;

  for (var i = 0; i < rows + cols - 1; i++) {
    memoize.push([]);
  }

  return memoize;
}

var update = function(matrix, memoize, rows, cols) {
  for (var i = 0; i < rows; i++) {
    for (var j = cols; j < matrix[0].length; j++) {
      memoize[i + j].push(matrix[i][j]);
    }
  }
}

debugger; var output = printDiagonal(matrix);
printMatrix(output)

