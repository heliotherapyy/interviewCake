function quickSort(array, start, end) {
	if (start < end) {
		var partition = getPartition(array, start, end);
		quickSort(array, start, partition - 1);
		quickSort(array, partition + 1, end);
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
		swap(array, 0, right);
	}

	return right;
}

function swap(array, first, second) {
	var temp = array[first];
	array[first] = array[second];
	array[second] = temp;
}

var array = [27,3,6,-2,15,1,10,10,10];
debugger; quickSort(array, 0, array.length - 1);
console.log(array);
