function findNextGreatest(number) {
  var digits = String(number).split("");

  var lastDigit = digits[digits.length - 1];
  for (var i = digits.length - 2; i >= 0; i--) {
    var prev = digits[i];
    if (prev > lastDigit) {
      swap(digits, digits.length - 1, i);
      break;
    }
  }

  // i is at the pivot
  // every digits to the right of pivot should be sorted in descending order
  var array = digits.slice(i + 1);

  // optimize using bucket sort
  array.sort(function(a, b) {
    if (a < b) return 1;
    else return -1;
  });

  for (var j = 0; j < array.length; j++) {
    digits[j + i + 1] = array[j];
  }
  console.log(digits.join(""));
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

// debugger; findNextGreatest(43759178);

function bucketSort(number) {
  var cache = {};

  var digits = String(number).split("");
  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    cache[digit] = (cache[digit]) ? cache[digit] = cache[digit] + 1 : cache[digit] = 1;
  }

  var array = [];

  var step = 9;
  while (step >= 0) {
    if (cache[step]) {
      for (var i = 0; i < cache[step]; i++) {
        array.unshift(step);
      }
    }
    step--;
  }

  console.log(array);
}

debugger; bucketSort(573224987925327);




