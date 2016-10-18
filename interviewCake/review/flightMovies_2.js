var flightLength = 100;
var array = [10,20,70, 32,89,110, 50];

function flightMovies(total, array) {
	// 10 20 30 32 70 89 110
	var cache = {};
	initialize(cache, array);

	for (var i = 0; i < array.length; i++) {
		var remainder = total - array[i];
		if (remainder !== array[i] && cache[remainder]) {
			return true;
		}
	}
	return false;
}

function initialize(cache, array) {
	for (var i = 0; i < array.length; i++) {
		cache[array[i]] = true;
	}
}

var answer = flightMovies(flightLength, array);
console.log(answer);