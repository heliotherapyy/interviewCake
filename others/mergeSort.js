function mergeSort(array, start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);
  }
}

function merge(array, start, mid, end) {
  var sorted = [];

  var i = start;
  var j = mid + 1;

  while (i <= mid && j <= end) {
    if (array[i] < array[j]) {
      sorted.push(array[i]);
      i++;
    } else {
      sorted.push(array[j]);
      j++;
    }
  }

  while (i <= mid) {
    sorted.push(array[i]);
    i++;
  }

  while (j <= end) {
    sorted.push(array[j]);
    j++;
  }

  var index = 0;
  for (var i = start; i <= end; i++) {
    array[i] = sorted[index];
    index++;
  }
}

var array = [5,7,2,1,4,3,8,9,5,3,1,1,10,12];
var array = [27,3,6,-2,15,1,10,10,10];
mergeSort(array, 0, array.length - 1);

console.log(array);