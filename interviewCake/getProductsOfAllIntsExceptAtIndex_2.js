var array = [1, 7, 3, 4];

function getProductsOfAllIntsExceptAtIndex(array) {
	var prev = [];
	var next = [];

	for (var i = 0; i < array.length; i++) {
		addPrev(prev, array, i);
		addNext(next, array, i);
	}

	return multiplyArrs(prev, next);
}

function addPrev(result, array, index) {
	var temp = 1;
	if (index === 0) {
		result.push(1);
	} else {
		for (var i = 0; i < index; i++) {
			temp *= array[i];
		}
		result.push(temp);
	}
}

function addNext(result, array, index) {
	var limit = array.length;
	var temp = 1;
	if (index === limit - 1) {
		result.push(1);
	} else {
		for (var i = index + 1; i < limit; i++) {
			temp *= array[i];
		}
		result.push(temp);
	}
}

function multiplyArrs(first, second) {
	var result = [];
	var product;

	for (var i = 0; i < first.length; i++) {
		product = first[i] * second[i];
		result.push(product);
	}

	console.log(result);
	return result;
}

getProductsOfAllIntsExceptAtIndex(array);

/*
	1 X 7 3 4 | 2 X 3 4 | 2 7 X 4 | 2 7 3 X 1 
	prev * next
*/

