var array = [-2,-10,3,6,4,2,7,-2,-10,14,-12,4];

function getHighestProduct(array) {
	// O(NlogN)
	array.sort(function(a, b) { 
		if (a < b) {
			return -1;
		} else {
			return 1;
		}
	});
	console.log("sorted: ", array);

	var twoSmallests = [array[0], array[1]];
	var threeGreatests = [array[array.length -3], array[array.length - 2], array[array.length - 1]];
	var greatest = threeGreatests[2];

	var candidate1 = twoSmallests.reduce(function(a, b) {return a * b;}) * greatest;
	var candidate2 = threeGreatests.reduce(function (a, b) {return a* b;});

	console.log(Math.max(candidate1, candidate2));
	return Math.max(candidate1, candidate2);

}


getHighestProduct(array);
