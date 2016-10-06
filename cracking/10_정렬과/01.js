function merge(A, B) {
  var sorted = [];
  var i = 0;
  var j = 0;

  while ( i <= A.length -1 && j <= B.length -1) {
    if (A[i] < B[j]) {
      sorted.push(A[i]);
      i++;
    } else {
      sorted.push(B[j]);
      j++;
    }
  }

  while (i <= A.length -1) {
    sorted.push(A[i]);
    i++;
  }

  while (j <= B.length - 1) {
    sorted.push(B[j]);
    j++;
  }

  var index_of_sorted = 0;
  for (var i = 0 ; i < sorted.length; i++) {
    A[i] = sorted[index_of_sorted];
    index_of_sorted++;
  }

  return A;
}

var A = [10,14,33,50];
var B = [1,78,100];

var answer = merge(A,B);
console.log(answer);
