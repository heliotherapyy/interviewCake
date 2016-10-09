
/* Logic

  Given the amount, 1, what is combinations of coins to make $1?
  Given $2, what is combinations of coins to make $2 based on the fact that we already know how to make $1
  Given $3, what is combinations of coins to make $3 based on the fact that we already know how to make $1, $2

  => Dynamic Programming
  (Optimal answer is based on optimal answers from subproblems)

  [1,1,1,1]
  [1,1,2]
  [1,3]
  [2,2]

  # Greedy Approach
  Given the first coin, find combinations to make up the remainder, and add the first coin
  How do we find combinations for the remainder?
  Same.
  Take the fisrt coin from given coins, figure out what the remainder is
    and make up that remainder with other coins

  => Greedy Approach
*/

/* Pseudo-code
  Take the first coin out of denominations, call it "X"
  Get the remainder, call it "remainder"
  Store merged combination (X + remainder) into result

*/

function findCombinations(amount, coins, combi, results) {
  // Base case
  if (amount === 0) {
    results.push(combi);
    return;
  }

  for (var i = 0; i < coins.length; i++) {
    var combination = combi.slice(0);
    var firstCoin = coins[i];
    var remainder = amount - firstCoin;
    if (remainder >= 0) {
      combination.push(firstCoin);
      findCombinations(remainder, coins.slice(i), combination, results);
    }
  }
  console.log(results);
}


var amount = 1;
var denominations = [2,3];
// debugger; findCombinations(amount, denominations, [], []);

function findCombinations(amount, denominations) {
  var cache = {

  };

  for (var i = 1; i <= amount; i++) {
    cache[i] = 0;
  }

  var n = 1;
  while (n <= amount) {
    for (var i = 0; i < denominations.length; i++) {
      var coin = denominations[i];
      if (coin > amount) {
        continue;
      } else if (coin === amount) {
        cache[n]++;
      } else {
        var remainder = amount - coin;
        if (cache[remainder] !== 0) {
          cache[n]++;
        }
      }
    }
    n++;
  }
  console.log(cache[amount]);
}

findCombinations(5, [2,3,5]);

