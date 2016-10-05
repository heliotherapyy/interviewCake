var array = [202,1,5,4,54,345,2,6];

function bubbleSort(array) {
  for (var i = 0 ; i < array.length -1 ; i++) {
    for (var j = 0 ; j < array.length - (i + 1) ; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }

  console.log(array);
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

bubbleSort(array);