var array = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]


// Again, we are merging anything intersects
// We update merged one as we go on 
// And push it to the result array as we find out they are not intersecting
function main(array) {
	// error checking
	if (!array) {
		return null;
	}

	// O(nLogN)
	array.sort(function(a, b) {
		if (a.startTime <= b.startTime) return -1;
		else return 1;
	});

	console.log("sorted: ", array);
	console.log("\n");

	var result = [];
	var merged = array[0];
	for (var i = 1; i < array.length; i++) {
		var newSchedule = array[i];
		if (doesOverlap(merged, newSchedule)) merged = merge(merged, newSchedule);
		else {
			result.push(merged);
			merged = newSchedule;
		}
	}

	result.push(merged);

	console.log(result);
}

function doesOverlap(first, second) {
	return !(first.endTime < second.startTime) && !(first.startTime > second.endTime);
}

function merge(first, second) {
	// first.startTime = Math.min(first.startTime, second.startTime);
	first.endTime = Math.max(first.endTime, second.endTime);
	return first;
}



debugger; main(array);