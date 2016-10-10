function update(matrix, row, col) {
  var rows = matrix.length;
  var cols = matrix[0].length;

  for (var i = 0; i < rows; i++) {
    matrix[i][col] = 0;
  }

  for (var j = 0; j < cols; j++) {
    matrix[row][j] = 0;
  }
}

function findZeros(array, matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    for (var j = 0; j < row.length; j++) {
      if (row[j] === 0) {
        array.push([i, j]);
      }
    }
  }
}

function main(matrix) {
  var positions = [];

  // positions: Array that holds [row, col]s
  findZeros(positions, matrix);

  for (var i = 0; i < positions.length; i++) {
    var position = positions[i];
    update(matrix, position[0], position[1]);
  }

  for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
}

var matrix = [
  [1,2,3],
  [4,5,0],
  [7,8,9]
];

main(matrix);