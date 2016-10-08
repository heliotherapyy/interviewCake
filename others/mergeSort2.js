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

// function mergeSort(array, start, end) {

//   // to handle array of 1 element correctly
//   if (start < end) {
//     var mid = Math.floor((start + end) / 2);
//     mergeSort(array, start, mid);
//     mergeSort(array, mid+1, end);
//     merge(array, start, mid, end);
//   }

//   return array;
// }

// function merge(array, start, mid, end) {
//   var sorted = [];
//   var left, right;

//   left = start;
//   right = mid + 1;

//   while (left <= mid && right <= end) {
//     if (array[left] < array[right]) {
//       sorted.push(array[left]);
//       left++;
//     } else {
//       sorted.push(array[right]);
//       right++;
//     }
//   }

//   while (left <= mid) {
//     sorted.push(array[left]);
//     left++;
//   }

//   while (right <= end) {
//     sorted.push(array[right]);
//     right++;
//   }

//   var sorted_index = 0;

//   for (var i = start ; i <= end; i++) {
//     array[i] = sorted[sorted_index];
//     sorted_index++;
//   }
// }

// debugger; var answer = mergeSort(array, 0, array.length - 1);
// console.log(answer);

/*
  October 8th
*/
function mergeSort(array, start, end) {
  if (start < end) {
    var midIdx = Math.floor((start + end) / 2);
    mergeSort(array, start, midIdx);
    mergeSort(array, midIdx + 1, end);

    merge(array, start, midIdx, end);
    console.log(array);
  }
}

function merge(array, start, middle, end) {
  var sorted = [];

  var i = start;
  var j = middle + 1;

  while (i <= middle && j <= end) {
    if (array[i] < array[j]) {
      sorted.push(array[i]);
      i++;
    } else if (array[i] > array[j]) {
      sorted.push(array[j]);
      j++;
    } else {
      sorted.push(array[i], array[j]);
      i++;
      j++;
    }
  }

  while (i <= middle) {
    sorted.push(array[i]);
    i++;
  }

  while (j <= end) {
    sorted.push(array[j]);
    j++;
  }

  var index = 0;
  for (var k = start; k <= end; k++) {
    array[k] = sorted[index];
    index++;
  }
}

var array = [5,7,2,1,4,3,8,9,5,3,1,1,10,12];
mergeSort(array, 0, array.length - 1);
