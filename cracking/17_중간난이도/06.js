var array = [1,2,4,7,10,11,7,12,6,7,16,18,19];

function findIndex(arr) {
  var cache = {};
  for (var i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      cache[arr[i]] = true;
    } else {
      var first = arr.indexOf(arr[i]);
      break;
    }
  }

  // find last index
  var last = arr.indexOf(arr[first], first + 1);
  while (last !== -1) {
    var data = arr.indexOf(arr[first], last + 1);
    if (data !== -1) {
      last = data;
    } else {
      break;
    }
  }
  var max = findMax(arr, 0, last);
  var last_index = last;
  for (i = last + 1; i < arr.length; i++) {
    var data = arr[i];
    if (data < max) last_index = i;
  }
  return [first, last_index];
}

function findMax(arr, start, end) {
  var max = arr[start];
  for (var i = start + 1; i <= end; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
}

debugger;
var answer = findIndex(array);
console.log(answer);
