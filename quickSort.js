function quickSort1(array, start, end) {
  if (start < end) {
    var partition = getPartition(array, start, end);

    quickSort1(array, start, partition - 1);
    quickSort1(array, partition + 1, end);
  }

  console.log(array);
}

function getPartition(array, start, end) {
  var pivot = array[start];

  // left looks for element greater than pivot
  var left = start + 1;
  // right looks for element smaller than pivot
  var right = end;

  while (left < right) {
    while (array[left] <= pivot) {
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

function swap(array, start, end) {
  var temp = array[start];
  array[start] = array[end];
  array[end] = temp;
}

var array = [1,10,12,4,7,3,9,18, 10, 10, 10];
var array = [10,20,10];
debugger; quickSort1(array, 0, array.length -1);





































