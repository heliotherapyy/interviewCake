var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

function main(array, capacity) {
	if (!array) {
		return null;
	}

	var cache = {};
	initialize(cache, capacity);

	// Sort out to use dynamic programming
	cakeTypes.sort(function(a, b) {
		if (a.weight <= b.weight) return -1;
		else return 1;
	});

	for (var i = 0; i < array.length; i++) {
		var cake = array[i];
		for (var weight = cake.weight; weight <= capacity; weight++) {
			var remainder = weight - cake.weight;
			if (remainder === 0) {
				cache[weight] = Math.max(cache[weight], cake.value);
			} else {
				cache[weight] = Math.max(cache[remainder] + cake.value, cache[weight]);
			}
		}
	}

	console.log(cache[capacity]);
}

function initialize(cache, capacity) {
	for (var i = 0; i <= capacity; i++) {
		cache[i] = 0;
	}
}

main(cakeTypes, capacity);
