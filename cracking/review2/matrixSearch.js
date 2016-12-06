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


var get = function(matrix, target) {
  var maxByRows = getMax(matrix);

  var row = alt_bsearch(maxByRows, target);

  var col = bsearch(matrix[row], target);

  if (col === -1) return -1;
  return [row, col];
}

var getMax = function(matrix) {
  var result = [];

  for (var i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    var max = row[row.length - 1];
    result.push(max);
  }

  return result;
}

var alt_bsearch = function(arr, target) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = arr[mid];

    if (middle === target) return mid;
    else if (middle > target) end = mid - 1;
    else start = mid + 1;
  }

  return start;
}

var bsearch = function(arr, target) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = arr[mid];

    if (middle === target) return mid;
    else if (middle > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

var matrix = createMatrix(4,5);
printMatrix(matrix);
console.log();
var found = get(matrix, 14);
console.log(found);