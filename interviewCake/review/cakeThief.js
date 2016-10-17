var cakeTypes = [
	{weight: 2, value: 15},
    {weight: 3, value: 90},
    {weight: 7, value: 160}
];

var capacity = 20;

function cakeThief(capacity, array) {
	// sort cakes by first weight, then value
	// quickSort(array, 0, array.length - 1);

	// starting from weight 1, we keep incrementing its weight all the way up to capacity
	// What we want to get is the maximum value that we can get
	var step = 1;
	var maxValue;
	var cache = {};
	for (var i = 0; i <= capacity; i++) {
		cache[i]= 0;
	}



	while (step <= capacity) {
		for (var i = 0; i < array.length; i++) {
			var cake = array[i];
			for (var weight = cake.weight; weight <= capacity; weight++) {
				if (cake.weight === weight) {
					if (!maxValue) {
						maxValue = cake.value;
					}
					maxValue = Math.max(maxValue, cake.value); 
					cache[weight] = maxValue;
				} else {
					var remainder = weight - cake.weight;
					cache[weight] += cache[remainder];
				}
			}
			
		}
		step++;
	}
	console.log(cache);
}

debugger; cakeThief(capacity, cakeTypes);