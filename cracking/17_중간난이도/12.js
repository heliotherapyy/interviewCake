function findPairs(arr, total) {
  var result = [];
  var cache = {};
  for (var i = 0; i < arr.length; i++) {
    update(cache, arr[i]);
    var rem = total - arr[i];
    if (cache[rem]) {
      var step = 0;
      while (step < cache[rem]) {
        result.push([arr[i], rem]);
        step++;
      }
    }
  }

  return result;
}

function update(cache, num) {
  if (!cache[num]) cache[num] = 1;
  else cache[num]++;
}

var array = [1,-1,2,0,-2,3,3,-2]
var total = 1;

var answer = findPairs(array, total);
console.log(answer);