/* Note

Input: number
Output: Array (combination of parentheses)

Approach #1: Dynamic Programming

n = 1: ()
n = 2: ()(), (())
n = 3: ()()(), (()()), (())(), ()(()), ((()))
v n = 4: ()()()(), (()()()), (()())(), ()(()()), ...

current = []
*/

function findCombinations(number) {
  var cache = {}; // key: step, value: array
  cache[1] = ['()'];

  var step = 2;

  // O(N = number)
  while (step <= number) {
    var current = [];
    // O(N!)
    for (var i = 0; i < cache[step - 1].length; i++) {
      var newPair = '()';
      var prev = cache[step - 1][i]; // (()), i = 1
      if (i !== 0) {
        current.push(newPair + prev);
      }

      current.push(prev + newPair); // ()()()
      current.push('(' + prev + ')'); // (()())
    }

    cache[step] = current.slice();
    step++;
  }

  return cache[number];
}

findCombinations(3);