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

// function swap(array, start, end) {
//   var temp = array[start];
//   array[start] = array[end];
//   array[end] = temp;
// }

// var array = [1,10,12,4,7,3,9,18, 10, 10, 10];
// var array = [10,20,10];
// debugger; quickSort1(array, 0, array.length -1);

// Divder and Conquer
function quickSort(array, start, end) {
  // we don't need equal sign
  // if start === end, that means there is only one element in the array
  // which means there is nothing to sort
  if (start < end) {
    var index = getPartition(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
  }

  console.log(array);
}

function getPartition(array, start, end) {
  var pivot = array[start];
  var left = start + 1;
  var right = end;

  while (left < right) {
    while (array[left] <= pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    // if they meet, that means
    // getting partition is over
    if (left < right) {
      swap(array, left, right);
    } else {
      break;
    }
  }

  if (pivot > array[right]) {
    swap(array, start, right);
  }

  return right;
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

var array = [5,7,2,1,4,3,8,9,5,3,1,1,10,12];
debugger; quickSort(array, 0, array.length -1);


































