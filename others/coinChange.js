var coins = [10, 2, 1];
var change = 12317;

function coinChange(change, coins) {
  var coinNumber = [];
  var remainder = change;
  var index = 0;
  while (remainder >= 0 && index <= coins.length - 1) {
    coinNumber[index] = howMany(remainder, coins[index]);
    remainder -= coins[index] * coinNumber[index];
    console.log("Coin: " + coins[index] + " : " + coinNumber[index]);
    index++;

  }
}

function howMany(remainder, coin) {
  var count = 0;

  while (remainder >= 0) {
    if (remainder - coin >= 0) {
      remainder -= coin;
      count++;
    } else {
      break;
    }
  }

  return count;
}

coinChange(change, coins);