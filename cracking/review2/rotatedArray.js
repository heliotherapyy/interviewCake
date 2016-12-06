var input = [15,16,19,20,25,1,3,4,5,7,10,14];

function binarySearch(arr, target) {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = arr[mid];

    if (middle === target) return mid;
    if (middle > arr[start]) {

      // left side
      if (target >= arr[start]) end = mid - 1;
      else start = mid + 1;

    } else {

      // right side
      if (target <= arr[end]) start = mid + 1;
      else end = mid - 1;
    }
  }

  return -1;
}

debugger; var output = binarySearch(input, 3);
console.log(output);
