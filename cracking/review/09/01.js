function steps(n) {
  var cache = {
    0: 1,
    1: 1,
    2: 2,
    3: 4
  };

  if (n < 4) return cache[n];

  var step = 4;
  while (step <= n) {
    cache[step] = cache[step - 1] + cache[step - 2] + cache[step - 3];
    step++;
  }

  return cache[n];
}

var answer = steps(5);
console.log(answer);