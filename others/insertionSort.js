function insertionSort(array) {
  for (var i = 1 ; i < array.length ; i++) {
    if (array[i-1] <= array[i]) {
      continue;
    }

    for (var j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        var prev = array.slice(0, j + 1);
        var next = array.slice(i + 1);
        prev.push(array[i]);
        prev = prev.concat(next);
      }
    }
  }

  console.log(array);
}

var array = [202,1,5,4,54,345,2,6];

debugger;
insertionSort(array);
