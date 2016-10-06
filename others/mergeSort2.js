// // Divide and Conquer

// function mergeSort(array, start, end) {
//   if (start < end) {
//     var mid = Math.floor((start + end) / 2);
//     mergeSort(array, start, mid);
//     mergeSort(array, mid+1, end);

//     merge(array, start, mid, end);
//   }

//   console.log(array);
// }

// function merge(array, start, mid, end) {
//   var temp = [];

//   var left = start;
//   var right = mid + 1;

//   while (left <= mid && right <= end) {
//     if (array[left] < array[right]) {
//       temp.push(array[left]);
//       left++;
//     } else {
//       temp.push(array[right]);
//       right++;
//     }
//   }

//   while (left <= mid) {
//     temp.push(array[left]);
//     left++;
//   }

//   while (right <= end) {
//     temp.push(array[right]);
//     right++;
//   }

//   var tempIndex = 0;
//   for (var i = start; i <= end; i++) {
//     array[i] = temp[tempIndex];
//     tempIndex++;
//   }
// }

var array = [2,10,4,1,34,23, 10];
// mergeSort(array, 0 , array.length -1);


/*
  October 5th
*/

function mergeSort(array, start, end) {

  // to handle array of 1 element correctly
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid+1, end);
    merge(array, start, mid, end);
  }

  return array;
}

function merge(array, start, mid, end) {
  var sorted = [];
  var left, right;

  left = start;
  right = mid + 1;

  while (left <= mid && right <= end) {
    if (array[left] < array[right]) {
      sorted.push(array[left]);
      left++;
    } else {
      sorted.push(array[right]);
      right++;
    }
  }

  while (left <= mid) {
    sorted.push(array[left]);
    left++;
  }

  while (right <= end) {
    sorted.push(array[right]);
    right++;
  }

  var sorted_index = 0;

  for (var i = start ; i <= end; i++) {
    array[i] = sorted[sorted_index];
    sorted_index++;
  }
}

debugger; var answer = mergeSort(array, 0, array.length - 1);
console.log(answer);


