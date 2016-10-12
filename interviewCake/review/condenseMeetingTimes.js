// Didn't push the very last prev into the result

var array = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]


/*
[
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]
*/
function condenseMeetingTimes(array) {
	// error check
	if (!array) {
		return null;
	}

	var result = [];

	// sort the array 
	quickSort(array, 0, array.length - 1);
	var prev, current;

	prev = array[0];

	for (var i = 1; i < array.length; i++) {
		current = array[i];
		if (doesOverlap(prev, current)) {
			prev = merge(prev, current);
		} else {
			result.push(prev);
			prev = current;
		}
	}

	result.push(prev);

	console.log(result);
}

function doesOverlap(prev, current) {
	// Check if two are separate, then reverse the result
	var flag1, flag2;

	flag1 = prev.endTime < current.startTime;
	
	return !flag1;
}

function merge(prev, current) {
	var minStartTime, maxEndTime;

	minStartTime = Math.min(prev.startTime, current.startTime);
	maxEndTime = Math.max(prev.endTime, current.endTime);

	return {
		startTime: minStartTime,
		endTime: maxEndTime
	};
}

function quickSort(array, start, end) {
	if (start < end) {
		var pivot = getPartition(array, start, end);
		quickSort(array, start, pivot - 1);
		quickSort(array, pivot + 1, end);
	}
	// console.log(array);
}

function getPartition(array, start, end) {
	var pivot = array[start].startTime;

	var left = start + 1;
	var right = end;

	while (left < right) {
		while (array[left].startTime <= pivot) {
			left++;
		}

		while (array[right].startTime > pivot) {
			right--;
		}

		if (left < right) {
			swap(array, left, right);
		} else {
			break;
		}
	}

	if (pivot > array[right].startTime) {
		swap(array, start, right);
	}

	return right;
}

function swap(array, first, second) {
	var temp = array[first];
	array[first] = array[second];
	array[second] = temp;
}

debugger; condenseMeetingTimes(array);