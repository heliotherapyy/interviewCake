var array = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(array, target, start, end) {

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

var answer = binarySearch(array, 6, 0, array.length - 1);
console.log(answer);