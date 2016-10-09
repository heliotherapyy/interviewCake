function fibonacci(n) {
  var cache = {
    0: 0,
    1: 1
  };

  var index = 2;
  while (index <= n) {
    cache[index] = cache[index - 1] + cache[index - 2];
    index++;
  }

  console.log(cache[n]);
  return cache[n];

}

fibonacci(10);
