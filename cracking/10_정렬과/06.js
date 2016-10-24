function matrix(M, N) {
  var matrix = [];

  for (var i = 0; i < N; i++) {
    var row = [];
    for (var j = 0; j < M; j++) {
      row.push([0]);
    }
    matrix.push(row);
  }

  return matrix;
}

console.log(matrix(4,3));

