function search(arr, start, end, target) {
  var mid_idx = Math.floor((start + end) / 2);
  var middle = arr[mid_idx];
  if (middle === target) return mid_idx;
  if (start > end) return -1;

  if (arr[start] < arr[mid_idx]) {
    if (target >= arr[start] && target <= arr[mid_idx]) {
      return search(arr, start, mid_idx - 1, target);
    } else {
      return search(arr, mid_idx + 1, end, target);
    }
  } else if (arr[start] > arr[mid_idx]) {
    if (target >= arr[mid_idx] || target <= arr[end]) {
      return search(arr, mid_idx + 1, end, target);
    } else {
      return search(arr, start, mid_idx - 1, target);
    }
  } else {
    if (arr[mid_idx] != arr[end]) {
      return search(arr, mid_idx+1, end, target);
    } else {
      var result = search(arr, start, mid_idx -1, target);
      if (result === -1) {
        return search(arr, mid_idx + 1, end, target);
      } else {
        return result;
      }
    }
  }
}

var array = [15,16,1,2,3,4,5,-10,-9,-5,10,11];
debugger; var array = search(array, 0, array.length - 1, -9);
console.log(array);