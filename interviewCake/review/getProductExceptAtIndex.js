var array = [1, 7, 3, 4];

function getProductExceptAtIndex(array) {
	if (!array) {
		return null;
	}

	var result = [];

	// O(n)
	var totalProduct = array.reduce(function (a, b) {return a * b;});
	var prevProduct = 1;

	// O(n)
	for (var i = 0; i < array.length; i++) {
		var target = array[i];
		result.push(totalProduct / target);
		array[i] = totalProduct / target;
	}

	console.log(result);
	console.log(array);
	return result;
}

getProductExceptAtIndex(array);

/*
	Space Complexity: O(1) : in-place
	Time Complexity: O(n) 
*/