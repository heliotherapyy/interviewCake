var arr1 = [2, 6, 2, 2, 6, 2, 2, 8, 2, 1];
// Majority Element: 2
var arr2 = [1, 7, 8, 2, 6, 8, 1, 3, 2, 8];
// Majority Element: none

var findMajority = function(arr) {
  var cache = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    cache[num] = (!cache[num]) ? 1 : ++cache[num];
    if (cache[num] > Math.floor(arr.length / 2)) return num;
  }
  return null;
}

var output = findMajority(arr2);
console.log(output);