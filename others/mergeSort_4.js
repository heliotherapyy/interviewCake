function mergeSort(arr, start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }

  console.log(array);
}

function merge(arr, start, mid, end) {
  var sorted = [];
  var left = start;
  var right = mid + 1;

  while (left <= mid && right <= end) {
    if (arr[left] < arr[right]) {
      sorted.push(arr[left]);
      left++;
    } else {
      sorted.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    sorted.push(arr[left]);
    left++;
  }

  while (right <= end) {
    sorted.push(arr[right]);
    right++;
  }

  var index = 0;
  for (var i = start; i <= end; i++) {
    arr[i] = sorted[index];
    index++;
  }
}

var array = [9,8,7,6,3,8,4,2,5,8,9,0,2,4,5,6,7,2,1];
mergeSort(array, 0, array.length - 1);