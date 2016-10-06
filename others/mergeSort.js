var array = [2,10,4,1,34,23];

function mergeSort(array, start, end) {
  if (start >= end) {
    return null;
  }

  var middle = Math.floor((start + end) / 2);

  // Split
  mergeSort(array, start, middle);
  mergeSort(array, middle + 1, end);

  // We merge two sublists, that are already sorted
  merge(array, start, middle, end);
  return array;
}

function merge(array, start, middle, end) {
  // var length = end - start + 1;
  // var temp = [];

  // var startIndex = start;
  // var left_end = middle;
  // var right_start = middle + 1;

  // while (startIndex <= left_end && right_start <= end) {
  //   if (array[startIndex] < array[right_start]) {
  //     temp.push(array[startIndex]);
  //     startIndex++;
  //   } else {
  //     temp.push(array[right_start]);
  //     right_start++;
  //   }
  // }

  // // One of sublists is storted in temp
  // if (startIndex > left_end) {
  //   while (right_start <= end) {
  //     temp.push(array[right_start]);
  //     right_start++;
  //   }
  // } else if (right_start > end) {
  //   while (startIndex <= left_end) {
  //     temp.push(array[startIndex]);
  //     startIndex++;
  //   }
  // }

  // var tempIndex = 0;
  // for (var i = start ; i < end ; i++) {
  //   array[start] = temp[tempIndex];
  //   tempIndex++;
  // }

  var i;
  var leftIndex = start;
  var rightIndex = middle + 1;
  var destIndex = 0;

  var temp = [];

  while (leftIndex <= middle && rightIndex <= end) {
    if (array[leftIndex] < array[rightIndex]) {
      temp.push(array[leftIndex]);
      leftIndex++;
    } else {
      temp.push(array[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex <= middle) {
    temp.push(array[leftIndex]);
    leftIndex++;
  }

  while (rightIndex <= end) {
    temp.push(array[rightIndex]);
    rightIndex++;
  }

  for (var i = start; i <= end; i++) {
    array[i] = temp[destIndex];
    destIndex++;
  }
}

debugger; var answer = mergeSort(array, 0, array.length - 1);
console.log(answer);
