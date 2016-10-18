function fibonacci(n) {
	var cache = {
		0: 0,
		1: 1
	};

	var step = 2;
	while (step <= n) {
		cache[step] = cache[step - 1] + cache[step - 2];
		step++;
	}

	console.log(cache[n])
	return cache[n];
}

fibonacci(10);