var arr = [11,-8, 16, -7, 24, -2, 3];

// O(n^2)
var main = function(arr) {
  var cache = {};

  for (var i = 0; i < arr.length; i++) {
    update(cache, arr, i);
  }

  console.log(cache);

  var maxRange = findMax(cache);
  return maxRange;
}

var update = function(cache, arr, start) {
  var sum = 0;
  for (var end = start; end < arr.length; end++) {
    sum += arr[end];
    cache[[start, end]] = sum / (end - start + 1);
    console.log(cache[[start, end]]);
  }
}

var findMax = function(obj) {
  var maxRange;
  for (var range in obj) {
    if (!maxRange) maxRange = range;
    else {
      if (obj[range] > obj[maxRange]) maxRange = range;
    }
  }
  return maxRange;
}

var output = main(arr);
console.log(output);