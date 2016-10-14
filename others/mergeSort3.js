function mergeSort(array, start, end) {
	if (start < end) {
		var mid_idx = Math.floor((start + end) / 2);

		mergeSort(array, start, mid_idx);
		mergeSort(array, mid_idx + 1, end);
		merge(array, start, mid_idx, end);
		console.log(array);
	}
}

function merge(array, start, middle, end) {
	var sorted = [];

	var left = start;
	var right = middle + 1;

	while (left <= middle && right <= end) {
		if (array[left] <= array[right]) {
			sorted.push(array[left]);
			left++;
		} else {
			sorted.push(array[right]);
			right++;
		}
	}

	while (left <= middle) {
		sorted.push(array[left]);
		left++;
	}

	while (right <= end) {
		sorted.push(array[right]);
		right++;
	}

	var sorted_index = 0;
	for (var i = start; i <= end; i++) {
		array[i] = sorted[sorted_index];
		sorted_index++;
	}
}

var array = [9,8,7,6,3,8,4,2,5,8,9,0,2,4,5,6,7,2,1];
mergeSort(array, 0, array.length - 1);