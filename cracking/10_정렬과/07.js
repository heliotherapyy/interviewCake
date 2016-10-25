var array = [[65, 100], [70, 150], [56, 90], [75,190], [60,95], [68, 110]];
var array2 = [65, 70, 56, 75, 60, 68];
/*array.sort(function(a, b) {
  if (a[0] <= b[0] && a[1] <= b[1]) return -1;
  else return 1;
})

console.log(array);*/

function quickSort(array, start, end) {
  if (start < end) {
    var partition = getPartition(array, start, end);

    quickSort(array, start, partition - 1);
    quickSort(array, partition + 1, end);
  }
}

function getPartition(array, start, end) {
  var pivot = array[start];

  var left = start + 1;
  var right = end;

  while (left < right) {
    while (array[left] && array[left][0] <= pivot[0] && array[left][1] <= pivot[1]) {
      left++;
    }

    while (array[right][0] > pivot[0] && array[right][1] > pivot[1]) {
      right--;
    }

    if (left < right) swap(array, left, right);
    else break;
  }

  if (pivot[0] > array[right][0] && pivot[1] > array[right][1]) {
    swap(array, start, right);
  }

  return right;
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

debugger; quickSort(array, 0, array.length - 1);
console.log(array);
