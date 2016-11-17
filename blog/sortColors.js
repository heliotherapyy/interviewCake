function swap(first, second, arr) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}


function sortColors(arr) {
  if (arr.length <= 1) return arr;

  var lastZero = 0;
  var p1 = 0;
  var p2 = arr.length - 1;


  while (p1 <= p2) {
    if (arr[p1] === 0) {
      swap(lastZero++, p1++, arr);
    } else if (arr[p1] === 1) {
        p1++;
    } else {
        swap(p1, p2--, arr);
    }
  }
}


