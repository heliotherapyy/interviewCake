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

matrix[0][3] = 0;
matrix[1][2] = 0;

var updated = modify(matrix);
printMatrix(updated);

function modify(matrix) {
  var cache = {};

  findZeros(cache, matrix);

  for (var pos in cache) {
    update(pos, matrix);
  }

  return matrix;
}

function findZeros(cache, matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) cache[[i, j]] = true;
    }
  }
}

function update(pos, matrix) {
  console.log(pos);

  var row = pos[0];
  var col = pos[2];

  for (var i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }

  for (i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

