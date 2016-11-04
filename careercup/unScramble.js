/*
'hello to the world' 
->
'elhloothtedrowl' 

Each word is srambled independently

*/

// should be sorted
var dic = {
	"hello": true,
	"to": true,
	"the": true,
	"world": true
};


function unScramble(string, dic) {
	
	var result = "";
	var dicArr = convertToArr(dic);

	while (true) {
		
		var stringIndex = 0;
		for (var i = 0; i < dicArr.length; i++) {
			var wordLength = findNextLength(dicArr, i);	
			var permuted = string.slice(stringIndex, wordLength);
			stringIndex = wordLength + 1;
			var original = findOriginal(permuted, dic);
			if (original) {
				result += original + " "; 
			} else {
				return "Cannot be unscrambled";
			}
		}

		break;
	}	

	return result.trim();
}

function convertToArr(object) {
	var array = [];
	var index = 0;
	for (var key in object) {
		array[index] = key;
		index++;
	}
	return array;
}

function findNextLength(array, index) {
	return array[index].length;
}

function findOriginal(string, dic) {
	var anagrams = permutate(string);
	for (var i = 0; i < anagrams.length; i++) {
		var candidate = anagrams[i];
		if (dic[candidate]) return candidate;
	}
}

function permutate(string) {
	var chars = string.split("");
	var prevs = chars.slice();
	var current = [];

	while (true) {
		for (var i = 0; i < prevs.length; i++) {
			var prev = prevs[i];
			for (var j = 0; j < chars.length; j++) {
				var char = chars[j];
				if (prev.indexOf(char) === -1) {
					current.push(prev + char);
				}
			}
		}

		if (current.length === 0) {
			return prevs;
		}

		prevs = current;
		current = [];	
	}
}

debugger; var answer = unScramble('elhloothtedrowl', dic);
console.log(answer);