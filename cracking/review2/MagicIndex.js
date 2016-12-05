var arr = [ -1, 0, 1, 2, 4, 10 ];

var findMagicIndex = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === i) return i;
  }
}

var output = findMagicIndex(arr);
console.log(output);

var alternative = function(arr) {
  var start = 0;
  var end = arr.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) return mid;

    if (mid > arr[mid]) start = mid + 1;
    else if (mid < arr[mid]) end = mid - 1;
  }

  return -1;
}

var output = alternative(arr);
console.log(output);