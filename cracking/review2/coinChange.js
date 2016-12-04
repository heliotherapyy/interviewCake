var coins = [1, 5, 10, 25];
var total = 12;

var coinChange = function(array, target) {
  var cache = {};
  initialize(cache, target);
  var step = 1;

    for (var i = 0; i < array.length; i++) {
      var coin = array[i];
      while (step <= target) {
        var rem = step - coin;
        if (rem === 0) cache[step]++;
        if (rem > 0) cache[step] += cache[rem];
        step++;
      }
      step = 1;
    }

  return cache[target];
}

var initialize = function(cache, target) {
  for (var i = 0; i <= target; i++) {
    cache[i] = 0;
  }
}

debugger; var result = coinChange(coins, total);
console.log(result);