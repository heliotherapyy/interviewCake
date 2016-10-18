var s1 = "{ [ ] ( ) }" 
var s2 = "{ [ ( ] ) }" 
var s3 = "{ [ }"

function main(string) {
	var stack = [];
	for (var i = 0; i < string.length; i++) {
		var char = string[i];
		if (char === '(' || char === '[' || char === '{') {
			stack.push(char);
		} else if (char === ')' || char === ']' || char === '}') {
			var opening = stack.pop();
			if (opening !== findMatch(char)) return false;
		}
	}
	return true;
}

function findMatch(char) {
	if (char === ')') return '(';
	else if (char === ']') return '[';
	else return '{';
}

var answer= main(s3)
console.log(answer);
