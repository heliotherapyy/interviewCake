// var array = [1,2,3,4,5,6,7,8,9,10];

// function binarySearch(array, target, start, end) {

//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);

//     if (array[mid] === target) {
//       return mid;
//     } else if (array[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return -1;
// }

// var answer = binarySearch(array, 6, 0, array.length - 1);
// console.log(answer);

// October 8th
function binarySearch(array, target, start, end) {
  while (start < end) {
    var midIdx = Math.floor((start + end) / 2);
    var middle = array[midIdx];

    if (middle === target) {
      return midIdx;
    } else if (middle < target) {
      return binarySearch(array, target, midIdx + 1, end);
    } else {
      return binarySearch(array, target, start, midIdx - 1);
    }
  }

  return -1;
}

function binarySearch2(array, target, start, end) {
  if (!start || !end) {

  }

  // includes equal sign because you still have to check if the only element is equal to target
  while (start <= end) {
    var midIdx = Math.floor((start + end) / 2);
    var middle = array[midIdx];

    if (middle === target) {
      return midIdx;
    } else if (middle < target) {
      start = midIdx + 1;
    } else {
      end = midIdx - 1;
    }
  }

  return -1;
}

var array = [1,2,3,4,5,6,7,8,9,10];
var answer = binarySearch2(array, 3, 0, array.length -1);
console.log(answer);



