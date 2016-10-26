function binarySearch(array, start, end, target) {
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = array[mid];

    if (middle === "") {
       mid = findClosest(array, mid);
       middle = array[mid];
    }

    if (middle === target) return mid;
    else if (middle > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function findClosest(array, index) {
  var i = index + 1;
  var j = index - 1;

  while (array[i] === "") i++;
  while (array[j] === "") j--;

  var diff1 = Math.abs(i - index);
  var diff2 = Math.abs(index - j);
  if (diff2 > diff1) return i;
  else return j;
}

var array = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""];
debugger; var answer = binarySearch(array, 0, array.length - 1, "at");
console.log(answer);