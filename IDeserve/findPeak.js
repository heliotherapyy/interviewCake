var findPeaks = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var prev = arr[i - 1];
    var next = arr[i + 1];
    var curr = arr[i];

    if (isPeak(prev, curr, next)) {
      result.push(arr[i]);
    }
  }

  return result;
}

var isPeak = function(prev, curr, next) {
  if (prev < curr && curr > next) return true;
  if (!prev && curr > next) return true;
  if (!next && curr > prev) return true;
  return false;
}

var input1 = [40, 10, 20, 5, 45, 50, 65, 90, 35, 25];
var input2 = [39,33,24,15,12,56,68,92,26,7]
var input3 = [15,20,25, 35, 45, 50, 60];
var result = findPeaks(input3);
console.log(result);

/* Just find one peak point */
var findOnePeak = function(arr) {
 var start = 0;
 var end = arr.length - 1;

 while (start <= end) {
  var mid = Math.floor((start + end) / 2);
  var curr = arr[mid];
  var prev = arr[mid - 1];
  var next = arr[mid + 1];

  if (isPeak(prev, curr, next)) return curr;

  // Two cases
  if (prev > curr) end = mid - 1;
  else if (next > curr) start = mid + 1;
 }

 return -1;
};

result = findOnePeak(input3);
console.log(result);

