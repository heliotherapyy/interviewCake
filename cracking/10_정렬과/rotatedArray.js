function findPivot(array, start, end) {
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = array[mid];

    if (array[mid - 1] > array[mid]) {
      console.log(mid);
      return;
    }
    else if (array[mid] < array[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(-1);
}

function search(array, start, end, target) {
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = array[mid];

    if (middle === target) {
      console.log(mid);
      return mid;
    } else if (middle > array[start]) {
      // left subarray is sorted
      if (target >= array[start] && target <= middle) {
        // target is in left subarray
        end = mid - 1;
      } else {
        // target is in right subarray
        start = mid + 1;
      }
    } else {
      // right subarray is sorted
      if (target >= middle && target <= array[end]) {
        // target is in right subarray
        start = mid + 1;
      } else {
        // target is in left subarray
        end = mid - 1;
      }
    }
  }
  console.log(-1);
  return -1;
}

var array = [10,11,12,13,14,15,1,2,3];
search(array, 0, array.length - 1, 10);