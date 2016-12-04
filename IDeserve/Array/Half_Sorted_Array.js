var fix = function(array) {
  var MAX = Number.MIN_SAFE_INTEGER;
  var MIN = Number.MAX_SAFE_INTEGER;
  var result = [];

  var index = 0;
  var flag = true;

  while (flag) {
    var maxSoFar = array[index];
    var minSoFar = array[index];
    while (array[index] < array[index + 1]) {
      maxSoFar = Math.max(maxSoFar, array[index]);
      minSoFar = Math.min(minSoFar, array[index]);

      MAX = Math.max(MAX, maxSoFar);
      MIN = Math.min(MIN, minSoFar);

      if ((array[index] < MAX || array[index] < MIN)) result.push(index);
      index++;

      if (index === array.length - 1) {
        flag = false;
        break;
      }
    }

    MAX = Math.max(MAX, array[index]);
    MIN = Math.min(MIN, array[index]);

    result.push(index++);
  }

  return result

}

var input = [10,12,20,30,25,40,32,31,35,50,60];
debugger; var output = fix(input);
console.log(output);

var optimized = function(array) {
  var first = findFirst(array);
  var last = findLast(array);

  var found = pickMinMax(array, first, last);
  var min = found[0];
  var max = found[1];

  for (var i = 0; i < first; i++) {
    var num = array[i];
    if (num > min) first = i;
  }

  for (i = last + 1; i < array.length; i++) {
    var num = array[i];
    if (num < max) last = i;
  }

  return [first, last];
}

var findFirst = function(array) {
  var index = 0;
  while (array[index] < array[index + 1]) {
    index++;
  }
  return index;
}

var findLast = function(array) {
  var index = array.length - 1;
  while (array[index] > array[index - 1]) {
    index--;
  }
  return index;
}

var pickMinMax = function(array, start, end) {
  var min = max = array[start];
  for (var i =  start + 1; i <= end; i++) {
    var num = array[i];
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  return [min, max];
}

var result = optimized(input);
console.log(result);