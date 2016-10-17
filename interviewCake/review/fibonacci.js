function fibonacci(n) {
	cache = {};
	cache[0] = 0;
	cache[1] = 1;

	var step = 2;
	while (step <= n) {
		cache[step] = cache[step - 1] + cache[step - 2];
		step++;
	}

	return cache[step - 1];
}

// 0 1 1 2 3 5

var answer = fibonacci(10);
console.log(answer);