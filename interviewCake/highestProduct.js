var arrayOfInts = [10,-100, 2,6,7,-100, 12];

/*
  highestProduct = highest among all elements(X) * possible highest product of other two (Y)
  Y can be divided into two cases,
    (negative X negative) (A)
            or
    (postive X positive)  (B)

    if (A)
      find two lowest numbers
        if both are negative, multiply!
    else
      find next two highest numbers
        if both are positive, multiply

  [-10, -8, 0, 1] => 80
  [-2, -1, 0, 1, 2, 10, 15] = > -10 X -8 X 15 = 1200
*/

function highestProduct(array) {
  if (array.length < 3) {
    return null;
    console.error("less than three elements in the array");
  }

  /*
  // O(NlogN) - quicksort
  quickSort(array);

  var highest = array[array.length -1];
  var lows, highs;
  var candidate1, candidate2;
  lows = [array[0], array[1]];
  highs = [array[array.length - 2], array[array.length - 3]];

  */

  /*
    We need three highest + two lowest without sorting
  */
  var high1, high2, high3;
  var low1, low2;

  high1 = array[0];
  low1 = array[0];

  for (var i = 1 ; i < array.length; i++) {
    if (array[i] > high1) {
      high3 = high2;
      high2 = high1;
      high1 = array[i];
    }

    if (array[i] <= low1) {
      low2 = low1;
      low1 = array[i];
    }
  }

  // candidate1 = multiply(lows);
  // candidate2 = multiply(highs);

  candidate1 = low1 * low2;
  candidate2 = high2 * high3;

  var final_candidate = Math.max(candidate1, candidate2);

  var highestProduct = high1 * final_candidate;
  console.log(highestProduct);
  return highestProduct;
}

function multiply(array) {
  return array[0] * array[1];
}

function quickSort(array, start, end) {
  if (start < end) {
    var pivot = getPartition(array, start, end);
    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
  }

  // console.log(array);
}

function getPartition(array, start, end) {
  var pivot = array[start];

  var left = start + 1;
  var right = end;

  while (left < right) {
    while (array[left] <= pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left < right) {
      swap(array, left, right);
    } else {
      break;
    }
  }

  if (pivot > array[right]) {
    swap(array, start, right);
  }

  return right;
}

function swap(array, left, right) {
  var temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

var array = [-10,-10,1,3,2];
quickSort(array, 0, array.length - 1);
highestProduct(array);
