var total = 12;
var array = [7,2,1,6,9,3];
// 1 2 5 6 7 9
// 9 7 6 5 2 1
// returns boolean
function flightMovies(total, array) {
	var ascending = ascendSort(array);
	var descending = descendSort(array);

	var index = 0;

	for (var i = 0; i < ascending.length; i++) {
		var sum = ascending[i] + descending[index];
		if (sum > total) {
			index++;
		} else if (sum < total) {
			index = 0;
			continue;
		} else {
			if (descending[index] === ascending[i]) {
				continue;
			}

			return true;
		}
	}

	return false;
}
