function findSubArrays(array, start, end) {
  var storage = [];

  var first, last;
  first = start;
  last = start;

  while (last < end) {
    if (array[last + 1] >= array[last]) {
      last++;
    } else {
      storage.push([first, last]);
      first = last = last + 1;
    }
  }

  // last reached the end of array
  storage.push([first, last]);

  return storage;
}

function findWhere(array, indices, target) {
  for (var i = 0 ; i < indices.length ; i++) {
    var minIdx, maxIdx;
    var indexes = indices[i]; // Array of two numbers
    var flag = contain(array, indexes, target);
    if (flag) {
      return indexes;
    }
  }

  return -1;
}

function contain(array, indexes, target) {
  var minIdx = indexes[0];
  var maxIdx = indexes[1];

  var min = array[minIdx];
  var max = array[maxIdx];

  return (min <= target) && (target <= max);
}

// function binarySearch(array, start, end, target) {

//   var low = start;
//   var high = end;

//   while (low <= high) {
//     var midIdx = Math.floor((low + high) / 2);


//     var middle = array[midIdx];
//     if (middle === target) {
//       return midIdx;
//     } else if (middle < target) {
//       low = midIdx + 1;
//     } else {
//       high = midIdx - 1;
//     }
//   }

//   return -1;
// }

function binarySearch(array, start, end, target) {

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
console.log(binarySearch(array, 0, array.length -1, 10));


function main(array, start, end, target) {
  var subArrays = findSubArrays(array, start, end);
  var indexes = findWhere(array, subArrays, target);
  if (indexes !== -1) {
    var low = indexes[0];
    var high = indexes[1];
    return binarySearch(array, low, high, target);
  }
}

var array = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
var answer = main(array, 0, array.length - 1, 14);
console.log(answer);