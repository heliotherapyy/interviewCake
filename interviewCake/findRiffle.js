/*
	No matter how many cards are grabbed, it is sure that within 
	those grabbed part, it should increment only by 1
*/

function isRiffled(array) {
	var i = 1;
	
	// holds last card from each subdeck
	var left_prev = array[0];
	var right_prev;

	while (i < array.length) {
		var current = array[i];
		if (getNext(left_prev) === current) {
			left_prev = current;
			i++;
			continue;
		}

		if (!right_prev) {
			right_prev = current;
		} else if (getNext(right_prev) === current) {
			right_prev = current;
		} else {
			return false;
		}
		i++;
	}
	
	return true;
}

function getNext(card) {
	return card + 1;
}

function main(array) {
	var answer = isRiffled(array);
	console.log(answer);
}

main([1,2,4,3,5,6]);
main([1,10,4,3,5,6]);

