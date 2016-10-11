function random5() {
	var one = 7/5;
	var two = one * 2;
	var three = one * 3;
	var four = one * 4;
	var five = one * 5;

	var object = {
		0: one,
		1: two,
		2: three,
		3: four,
		4: five
	};

	var random = random7();
	var position = findWhere(object, random);
	console.log(Number(position) + 1);

	return position + 1;
}

function findWhere(object, num) {
	for (var index in object) {
		var boundary = object[index];
		if (boundary >= num) {
			return index;
		}
	}
}

function random7() {
	var random = Math.floor(Math.random() * 10);
	random = random % 7 + 1;
	console.log(random);
	return random; 
}

// random7()
random5();

/*
1 1
2 2
3 3
4 3
5 4
6 5
7 5
*/