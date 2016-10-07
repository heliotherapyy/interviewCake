function findTwice(array) {
  var n = array[array.length -1];

  var sum = findSum(array);

  var diff = sum - ((n+1) * n / 2);
  if (!diff) {
    return null;
  } else {
    return diff;
  }
}

function findSum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var array = [1,2,3,4,5,6,7,8,9,10,10];
var answer = findTwice(array);
console.log(answer);