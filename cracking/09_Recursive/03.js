function findMagicIndex(array, start, end) {
  while (start <= end) {
    var mid_idx = Math.floor((start + end) / 2);
    var middle = array[mid_idx];
    if (middle === mid_idx) {
      console.log("The answer: " + middle);
      return middle;
    } else if (middle > mid_idx) {
      end = mid_idx - 1;
    } else {
      start = mid_idx + 1;
    }
  }
}

var array = [-10, -9, 2, 10, 17, 20, 25];
findMagicIndex(array, 0, array.length - 1);