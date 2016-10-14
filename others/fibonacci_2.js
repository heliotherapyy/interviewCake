function fibonacci(number) {
	// error check
	if (typeof number !== "number") {
		return -1;
	}

	var cache = {};

	if (number === 0 || number === 1) {
		return number;
	}

	// initialize cache with base cases
	cache[0] = 0;
	cache[1] = 1;

	var step = 2;
	while (step <= number) {
		cache[step] = cache[step - 1] + cache[step - 2];
		step++;
	}

	console.log(cache[number])
	return cache[number];
}

fibonacci(10);
