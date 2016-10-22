// elements unique
function findCombinations(array, total){
	var result = [];
	var cache = {};
	var step = findMin(array);
	initialize(cache, step, total);

	while (step <= total) {
		var index = contains(array, step);
		if (index === -1) {
			step++;
			continue;
		} else {
		if (step === array[index]) {
			cache[step].push([array[index]]);
		} 
			var remainder = total - array[index];
			if (!cache[remainder]) {
				step++;
				continue;
			} else {
				var prevs = cache[remainder];
				for (var j = 0; j < prevs.length; j++) {
					console.log(prevs[j]);
					cache[step].push([prevs[j].slice().push([array[index]])]);
				}
			}
			
		}
		step++;
	}
	return cache[total];
}

function findMin(array) {
	var min = array[0];
	for (var i = 1; i < array.length; i++) {
		min = Math.min(min, array[i]);
	}
	return min;
}

function initialize(cache, min, total) {
	for (var i = min; i <= total; i++) {
		cache[i] = [];
	}
}

function contains(array, target) {
	return array.indexOf(target);
}



var total = 10;
var array = [-4,2,-3,7,8, 5, 0];

debugger; var answer = findCombinations(array, total);
console.log(answer);