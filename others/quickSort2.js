function quickSort(array, start, end) {
  if (start < end) {
    var partition = getPartition(array, start, end);
    quickSort(array, start, partition - 1);
    quickSort(array, partition + 1, end);
  }

  console.log(array);
}

function getPartition(array, start, end) {
  var pivot = array[start];
  var left = start + 1;
  var right = end;

  while (left < right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left < right) {
      swap(array, left, right);
    }
  }
  if (pivot > array[right]) {
    swap(array, start, right);
  }

  return right;
}

function swap(array, i, j) {
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

var array = [1,10,12,4,7,3,9,18];
quickSort(array, 0, array.length -1);

