var cakeTypes = [
	{weight: 2, value: 15},
    {weight: 3, value: 90},
    {weight: 7, value: 160}
];

var capacity = 20;

function cakeThief(capacity, array) {
	
	var cache = {};
	for (var i = 0; i <= capacity; i++) {
		cache[i]= 0;
	}
	
	for (var i = 0; i < array.length; i++) {
		var cake = array[i];
		for (var weight = cake.weight; weight <= capacity; weight++) {
			var remainder = weight - cake.weight;
			if (remainder === 0) {
				cache[weight] = Math.max(cache[weight], cake.value);
			} else {
				var previousMax = cache[weight];
				var candidate = cache[remainder] + cake.value;
				cache[weight] = Math.max(previousMax, candidate);
			}
		}
	}

	
	console.log(cache);
}

debugger; cakeThief(capacity, cakeTypes);