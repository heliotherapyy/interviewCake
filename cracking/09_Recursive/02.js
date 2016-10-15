function robotMove(array) {
  if (!array) {
    return -1;
  }

  // initialize
  initialize(array);
  printMatrix(array);
  var col = 1;
  var row = 1;
  while (row <= array.length - 1) {
    array[row][col] = getData(array, row, col);
    printMatrix(array);
    row++;
    if (row === array.length) {
      if (col === array[0].length - 1) {
        break;
      }
      col++;
      row = 1;
    }
  }

  var row = array.length - 1;
  var col = array[0].length - 1;
  return array[row][col];
}

function getData(array, row, col) {
  return array[row - 1][col] + array[row][col - 1];
}

function initialize(array) {
  var row = array.length;
  var col = array[0].length;
  for (var i = 0; i < row; i++) {
    array[i][0] = 1;
  }
  for (var j = 0; j < col; j++) {
    array[0][j] = 1;
  }
}

function makeMatrix(row, col) {
  var array =[];
  for (var i = 0; i < row; i++) {
    var column = [];
    for (var j = 0; j < col; j++) {
      column.push(0);
    }
    array.push(column);
  }

  for (i = 0; i < row; i++) {
    console.log(array[i]);
  }

  return array;
}

function printMatrix(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

var matrix = makeMatrix(4,3);
debugger; var answer = robotMove(matrix);
console.log(answer);
