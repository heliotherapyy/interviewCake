/*
	[1,1,2,2,3,3,4,4,5]
	=> 5
*/

function droneTrack(array) {
	var sum1 = 0;
	var sum2 = 0;
	var cache = {};
	for (var i = 0; i < array.length; i++) {
		var id = array[i];
		if (!cache[id]) {
			cache[id] = true;
		}
		sum1 += id;
	}
	for (var id in cache) {
		sum2 += Number(id);
	}

	sum2 *= 2;

	console.log(sum2 - sum1);
	return sum2 - sum1;
}

function droneTrack2(array) {
	var first = array[0];

	for (var i = 1; i < array.length; i++) {
		first ^= array[i];
	}
	console.log(first);
	return first;
}

var array = [1,1,2,2,3,3,4,4,5];
droneTrack2(array);

/*
	1 ^ 10 = 11
	11 ^ 1 = 10
	10 ^ 1
*/