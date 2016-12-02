var array = [-2, -3, 4, -1, -2, 1, 5, -3];
var expected = 7;

var largestSum = function(array, start, end) {
  if (!array.length) return null;
  if (start > end) return null;

  start = (start === undefined) ? 0 : start;
  end = (end === undefined) ? array.length - 1 : end;

  var largest = sum(array, start, end);

  for (var i = start; i <= end; i++) {
    var next = largestSum(array, i, end - 1);
    if (next) {
      largest = Math.max(largest, next);
    }
  }

  return largest;

}

var sum = function(array, start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += array[i];
  }
  return sum;
};

debugger; var result = largestSum(array);
console.log(result);

/*
  Right now the time complexity is N^3
  How do I optimize this?
*/

var optimized = function(array) {
  if (!array.length) return null;

  var largestSum = currentMax = array[0];

  for (var i = 1; i < array.length; i++) {
    currentMax = Math.max(array[i], array[i] + currentMax);
    largestSum = Math.max(largestSum, currentMax);
  }

  return largestSum;
};

var result = optimized(array);
console.log(result);













