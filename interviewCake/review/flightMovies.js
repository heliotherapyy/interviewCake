var total = 9;
var array = [7,2,1,6,9,13];
// 1 2 5 6 7 9
// 9 7 6 5 2 1

/*
	{
		7: true
		2
		1
		6
		9 
		13
	}
*/

function flightMovies2(total, array) {
	var cache = {};
	for (var i = 0; i < array.length; i++) {
		var time = array[i];
		cache[time] = true;
	}

	for (i = 0; i < array.length; i++) {
		var remainder = total - array[i];
		if (cache[remainder]) {
			return true;
		}
	}
}

var answer = flightMovies2(total, array);
console.log(answer);

// returns boolean
function flightMovies(total, array) {

	// O(NlogN)
	var ascending = quickSort(array, 0, array.length -1);
	var descending = [];
	// O(N)
	for (var i = array.length - 1; i >= 0; i--) {
		descending.push(array[i]);
	}

	var index1 = 0;
	var index2 = 0;

	while (index1 <= array.length - 1) {
		var sum = ascending[index1] + descending[index2];
		if (sum > total) {
			index2++;
		} else if (sum < total) {
			index2 = 0;
			index1++;
		} else {
			(ascending[index1] === descending[index2]) ? index1++ : null;
			return true;
		}
	}

	return false;
}

function quickSort(array, start, end) {
	if (start < end) {
		var partition = getPartition(array, start, end);
		quickSort(array, start, partition - 1);
		quickSort(array, partition + 1, end);

		return array;
	}
}

function getPartition(array, start, end) {
	var pivot = array[start];

	var left = start + 1;
	var right = end;

	while (left < right) {
		while (array[left] <= pivot) {
			left++;
		}
		while (array[right] > pivot) {
			right--;
		}
		if (left < right) {
			swap(array, left, right);
		} else {
			break;
		}
	}

	if (pivot > array[right]) {
		swap(array, start, right);
	}

	return right;
}

function swap(array, first, second) {
	var temp = array[first];
	array[first] = array[second];
	array[second] = temp;
}

debugger; var answer = flightMovies(total, array);
console.log(answer);