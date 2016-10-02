var array = [10,5,7,15,20,2,4,-123,-354,435,1,3254];

function quickSort(array, start, end) {
  if (start < end) {
    var partition = getPartition(array, start, end);

    quickSort(array, start, partition - 1);
    quickSort(array, partition + 1, end);

    console.log(array);
  }
}

function getPartition(array, start, end) {
  var pivot = array[start];

  var i = start;
  var j = end;

  i++;

  while (true) {
    while (array[i] <= pivot) {
      i++;
    }

    while (array[j] > pivot) {
      j--;
    }

    if (i > j) {
      swap(array, start, j);
      break;
    } else {
      swap(array, i, j);
    }
  }

  return j;
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

debugger;
quickSort(array, 0, array.length - 1);