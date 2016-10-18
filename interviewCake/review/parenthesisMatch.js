var string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

function findMatch(index, string) {

	// Assume index points to the first opening paranthesis
	var count = 1;

	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		if (char === '(') {
			if (i === index) {
				break;
			} else {
				count++;
			}
		} 
	}

	var order = count;
	count = 1;
	for (i = string.length - 1; i >= 0; i--) {
		var char = string[i];
		if (char === ")" ) {
			if (order === count) return i;
			else count++;
		}
	}

}

debugger; var answer = findMatch(28, string);
console.log(answer);