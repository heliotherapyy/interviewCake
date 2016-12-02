var array = [1,2,4,7,10,11,7,6,12,16,18,19];
var expected = [3, 7];

// brute-force
// time complexity: O(n^2);
var findRotation = function(array) {
  var result;

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    var found = helper(array, i);
    if (found) {
      result = [i, found];
      return result;
    }
  }

  return -1;
}

var helper = function(array, index) {
  var target = array[index];

  for (var i = array.length - 1; i > index; i--) {
    var num = array[i];
    if (target >= num) return i;
  }
}

var result = findRotation(array);
console.log(result);