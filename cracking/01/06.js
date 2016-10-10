function rotateMatrix(matrix, N) {
  var array = extractData(matrix, N);

  var arr_index = 0;
  var row_index = 0;
  var col_index = N - 1;
  while (row_index < N && col_index >= 0) {
    matrix[row_index][col_index] = array[arr_index];
    row_index++;
    if (row_index === N) {
      col_index--;
      row_index = 0;
    }
    arr_index++;
  }
  console.log(matrix);
}

function extractData(matrix, N) {
  var result = [];
  for (var i = 0 ; i < N; i++) {
    var row = matrix[i];
    for (var j = 0 ; j < N; j++) {
      result.push(row[j]);
    }
  }
  console.log(result);
  return result;
}

var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

// extractData(matrix, 3);
rotateMatrix(matrix, 3);
