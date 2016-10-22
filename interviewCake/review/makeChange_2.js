var total = 10;
var denominations = [1,2,3];

/*
11111 1112 122 23 113
*/

function makeChange(total, array) {
  // Using memoization
  var cache = {};
  for (var i = 0; i <= total; i++) {
    cache[i] = 0;
  }
  cache[0] = 1;

  // Bottom-up approach (DP)
  for (var i = 0; i < array.length; i++) {
    var coin = array[i];
    for (var amount = coin; amount <= total; amount++) {
      var remainder = amount - coin;
      if (remainder === 0) {
        cache[amount]++;
      } else {
        cache[amount] += cache[remainder];
      }
    }
  }

  console.log(cache[total]);
  return cache[total];
}

makeChange(total, denominations);

function makeChange2(total, array) {
  var cache = {};
  for (var i = 0; i <= total; i++) {
    cache[i] = [];
  }

  var combinations = [];

  // Dynamic Programming (Bottom-up)
  for (var i = 0; i < array.length; i++) {
    var coin = array[i];
    for (var amount = coin; amount <= total; amount++) {
      var remainder = amount - coin;
      if (remainder === 0) {
        cache[amount].push([coin]);
      } else {
        for (var j = 0; j < cache[remainder].length; j++) {
          var prev = cache[remainder][j].slice();
          prev.push(coin);
          combinations.push(prev);
        }

        var temp = [];
        for (j = 0; j < combinations.length; j++) {
          var combi = combinations[j];
          cache[amount].push(combi);
        }

        combinations = [];
      }
    }
  }

  console.log(cache[total]);
}

debugger; makeChange2(total, denominations);

