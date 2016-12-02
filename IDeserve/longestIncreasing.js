var input = [3,1,5,2,6,4,9,3,7,1];

var longestAscend = function(arr) {
  var result = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    var last = result[result.length - 1];
    var current = arr[i];
    if (last < arr[i]) result.push(arr[i]);
    else replace(result, arr[i]);
  }
  return result;
};

var replace = function(arr, target) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = arr[mid];

    if (middle > target) end = mid - 1;
    else start = mid + 1;
  }

  arr[start] = (arr[end] === target) ? arr[start] : target;
}

debugger; var output = longestAscend(input);
console.log(output);


