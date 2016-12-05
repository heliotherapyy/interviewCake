function step(n) {
  var cache = {};
  initialize(cache, n);

  var step = 1;
  while (step <= n) {
    cache[step] = cache[step - 3] + cache[step - 2] + cache[step - 1];
    step++;
  }

  return cache[n];
}

function initialize(cache, n) {
  cache[-1] = cache[-2] = cache[-3] = 0;
  cache[0] = 1;
}

var output = step(4);
console.log(output);