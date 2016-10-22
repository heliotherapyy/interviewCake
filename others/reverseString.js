function reverseString(string) {
	var array = string.split("");
	var start = 0;
	var end = array.length - 1;
	while (start < end) {
		var temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		start++;
		end--;
	}
	console.log(array.join(""))
}

reverseString("Lennnnny");