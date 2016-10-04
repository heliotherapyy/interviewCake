function quickSort (array, left, right) {
  if (left < right) {
    var index = partition(array, left, right);

    quickSort(array, left, index - 1);
    quickSort(array, index + 1, right);
  }

  console.log(array);
}

function swap(array, i, j) {
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function partition (array, left, right) {
  var first = left;
  var pivot = array[first];

  left++;

  while (left < right) {
    while (array[left] <= pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left < right) {
      swap(array, left, right);
    } else {
      break;
    }
  }

  swap(array, first, right);
  return right;
}

// var array = [202,1,5,4,54,345,2,6];
// debugger;
// quickSort(array, 0 , array.length - 1);






function quickSort2(array, start, end) {
  if (start < end) {
    var partition = getPartition(array, start, end);

    quickSort2(array, start, partition - 1);
    quickSort2(array, partition + 1, end);
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

var array = [1,10,12,4,7,3,9,18];
debugger; quickSort2(array, 0, array.length -1);





































