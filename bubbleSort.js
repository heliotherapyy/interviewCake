var array = [202,1,5,4,54,345,2,6];

function swap(array, i, j) {
  var temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function bubbleSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0 ; j < array.length - (i+1); j++) {
      var data = array[j];
      if (data > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
  console.log(array);
}

debugger;
bubbleSort(array);