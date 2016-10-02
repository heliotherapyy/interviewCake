// Dynamic Programming
function fibonacci(n) {
  var cache = {
    0: 0,
    1: 1
  };

  var answer;
  if (typeof cache[n] !== 'number') {
    answer = fibonacci(n-2) + fibonacci(n-1);
    cache[n] = answer;
  }
  return cache[n];
}

var answer = fibonacci(20);
console.log(answer);

function fibonacci2(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0 || n === 1) {
    return n;
  }

  var prevPrev = 0;
  var prev = 1;
  var current;

  for (var i = 2; i <= n; i++) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

var answer2 = fibonacci2(20);
console.log(answer2);