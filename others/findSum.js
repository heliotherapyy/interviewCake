function sumToX(array, target) {
	var start = 0;
	var end = 0;
	var sum = 0;
	while (end < array.length) {
		if (sum + array[end] <= target) {
			sum += array[end];
			end++;
		} else {
			sum -= array[start];
			start++;
		}

		if (sum === target) {
			return true;
		}

		if (end < start) {
			end = start;
			sum = 0;
		}
	}

	return false;
}

var array = [1,3,5,18];

debugger; var answer = sumToX(array, 8);
console.log(answer);