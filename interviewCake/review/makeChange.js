var denominations = [2,3,4];
var amount = 7;

/*

1: 1 : 1
2: 1 1 / 2 : 2
3: 1 1 1 / 1 2 / 3 : 3
4: 1 1 1 1 / 1 1 2 / 1 3 / 2 2 : 4
5: 1 1 1 1 1 / 1 1 1 2 / 1 2 2 / 1 1 3 / 2 3 : 5
6: 1 1 1 1 1 1 / 1 1 1 1 2 / 1 1 1 3 / 1 1 2 2 / 1 2 3 / 2 2 2 : 6

	1 1 1 1
	1 1 2
	1 3
	2 2
*/

function makeChange(total, denominations) {
	if (total === 0) {
		return 0;
	} else if (denominations.length === 0) {
		return 0;
	}

	var cache = {};

	initialize(cache, total);

	var amount = 1;

	while (amount <= total) {
		for (var i = 0 ; i < denominations.length; i++) {
			var coin = denominations[i];
			if (coin === amount) {
				cache[amount] += 1;
			} else if (coin > amount) {
				continue;
			} else if (coin < amount) {
				var remainder = amount - coin;
				if (remainder === coin) {
					cache[amount] += 1;
				} else if (remainder > coin) {
					cache[amount] += makeChange(remainder, denominations.slice(i));
				}
			}
		}
		amount++;
	}
	console.log(cache[total]);
	return cache[total];
}

function initialize(object, number) {
	for (var i = 1; i <= number; i++) {
		object[i] = 0;
	}
	// console.log(object);
}

debugger; makeChange(amount, denominations);