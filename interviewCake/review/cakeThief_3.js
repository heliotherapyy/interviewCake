/*
	F(cackes, capacity) = F(cakes - cake(i), capacity - weight(i)) where i is the best choice.
*/

var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

function max_duffel_bag_value(cakes, capacity) {
	var memoize = {};
	initialize(memoize, capacity);

	for (var i = 0; i < cakes.length; i++) {
		var cake = cakes[i];
		for (var weight = cake.weight; weight <= capacity; weight++) {
			var remainder = weight - cake.weight;
			if (remainder === 0) {
				memoize[weight] = Math.max(memoize[weight], cake.value);
			} else {
				memoize[weight] = Math.max(memoize[weight], memoize[remainder] + cake.value);
			}
		}
	}

	return memoize[capacity];
}

function initialize(memoize, capacity) {
	for (var i = 0; i <= capacity; i++) {
		memoize[i] = 0;
	}
}

debugger; var answer = max_duffel_bag_value(cakeTypes, capacity);
console.log(answer);
