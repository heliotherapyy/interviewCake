var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(array) {
	var min = array[0];
	var profit = array[1] - min;
	for (var i = 1; i < array.length; i++) {
		var current = array[i];
		profit = Math.max(profit, current - min);
		if (current < min) {
			min = current;
		}
	}
	console.log(profit);
	return profit;
}

getMaxProfit(stockPricesYesterday);