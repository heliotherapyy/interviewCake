function findCombinations(total, array) {
  var cache = {};

  // initialize
  for (var i = 0; i <= total; i++) {
    cache[i] = 0;
  }

  for (i = 0; i < array.length; i++) {
    var step = array[i];
    var amount = 1;
    while (amount <= total) {
      update(amount, step, cache);
      amount++;
    }
  }

  return cache[total];
}

function update(amount, step, cache) {
  if (amount === step) {
    cache[amount]++;
  }
  else if (amount > step) {
    var remainder = amount - step;
    cache[amount] += cache[remainder];
  }
}

var total = 6;
var array = [1,2,3];

/*
  1 1 1 1 1
  1 1 1 2
  1 1 3
  1 2 2
  2 3
*/

/*
  1 1 1 1 1 1
  1 1 1 1 2
  1 1 1 3
  1 1 2 2
  2 2 2
  3 3
  3 3 1

*/

debugger; var answer = findCombinations(total, array);
console.log(answer);
