var denominations = [];
var total = 10;

function coinChange(total, denominations) {
  var cache = {};

  // initialize cache
  for (var i = 0; i <= total; i++) {
    cache[i] = 0;
  }

  var amount = 1;
  for (i = 0; i < denominations.length; i++) {
    var coin = denominations[i];
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
}

debugger; coinChange(total, denominations);
