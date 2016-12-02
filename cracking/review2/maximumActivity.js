function main(arr, start) {
  var current = 1;
  var max = 1;

  for (var i = start; i < arr.length; i++) {
    var current = Math.max(current, 1 + helper(arr, i + 1));
    var max = Math.max(max, current);
  }

  return max;
}

function helper(arr, index) {
  var next = arr[index - 1];
  var count = 0;
  for (var i = index; i < arr.length; i++) {
    var activity = arr[i];
    if (!doesOverlap(next, activity)) {
      count++;
      next = activity;
    }
  }

  return count;
}

function doesOverlap(first, second) {
  return (first[1] > second[0]);
}

var input = [[0,6], [1,2], [3,4], [5,7], [5,9], [8,9]];

debugger; var result = main(input, 0);
console.log(result);
