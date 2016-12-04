var trapWater = function(array) {
  var volume = 0;

  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    var leftCandidates = findHigher(array, 0, i - 1, current);
    var rightCandidates = findHigher(array, i + 1, array.length - 1, current);

    if (leftCandidates.length && rightCandidates.length) {
      volume += Math.min(findMax(leftCandidates), findMax(rightCandidates)) - current;
    }
  }

  return volume;
}

var input = [0,1,0,2,1,0,1,3,2,1,2,1];

var findHigher = function(array, start, end, target) {
  var result = [];

  if (start < end && start >= 0 && end <= array.length - 1) {
    for (var i = start; i <= end; i++) {
      var height = array[i];
      if (height > target) result.push(height);
    }
  }

  return result;
}

var findMax = function(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    var curr = array[i];
    max = Math.max(max, curr);
  }
  return max;
}

debugger; var result = trapWater(input);
console.log(result);

debugger;console.log(findHigher(input, 3, input.length -1, input[2]));
