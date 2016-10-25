/* Note

Input: Array = [1,3,5], total = 6

n = 0: [] (1)
n = 1: [1] (1)
n = 2: [1, 1] (1)
n = 3: [1, 1, 1], [3] (2) : 1 + 1 = 2
n = 4: [1, 1, 1, 1], [3, 1], [1, 3] (3) : 2 + 1 + 0 = 3
n = 5: [1, 1, 1, 1, 1], [3, 1, 1], [1, 3, 1], [1, 1, 3], [5] // how to erase duplicates?, 5 : 3 + 1 + 1 = 5
n = 6:

Approach #1 : Dynamic Programming (with memoization)

total = 5
cache: {
  0: 1,
  1: 1,
  2: 1,
  3: 2,
  4: 3
  5: 3 + 1 + 1 = 5
}

*/

// O(N X M) -> O(N^2)
function findWays(array, total) {
  var cache = {}; // key: incrementing step, value: # of ways
  cache[0] = 1;
  initialize(cache, total); // holds 0 for every step until total

  var step = 1;

  // O(N)
  while (step <= total) {
    // O(M)
    for (var i = 0; i < array.length; i++) {
      var strategy = array[i];
      var remainder = step - strategy;
      if (remainder < 0) {
        // do nothing
        continue;
      }
      cache[step] += cache[remainder];
    }

    step++;
  }

  return cache[total];
}

function initialize(object, total) {
  for (var i = 1; i <= total; i++) {
    object[i] = 0;
  }
}