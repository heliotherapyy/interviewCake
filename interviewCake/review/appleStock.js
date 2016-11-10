var stockPricesYesterday = [10, 7, 5, 8, 11, 9];


// Again, this is asking something about maximum
// What additional values are needed? : minimum price so far
// What eventually has to be updated? : maxProfit
function getMaxProfit(array) {
	var maxProfit = array[1] - array[0];
	var min = array[0];

	for (var i = 1; i < array.length; i++) {
		var profit = array[i] - min;
		maxProfit = Math.max(maxProfit, profit);
		var min = Math.min(min, array[i]);
	}

	return maxProfit;
}

var answer = getMaxProfit(stockPricesYesterday);
console.log(answer);


// From Cracking
var array = [-1,6,3,-5,-6,10,5,2,-5,7];
var array = [2,-8,3,-2,4,-10];

// Again, should find maximum sum
// I should think of greedy approach first
// What additional value am I in need?
// What should be updated as we go on?
function findMaxConsecutive(array) {
	var maxSum = array[0];
	var sum = array[0];
	for (var i = 1; i < array.length; i++) {
		sum += array[i];
		(sum < 0) ? sum = 0 : null;
		maxSum = Math.max(maxSum, sum);
	}
	console.log(maxSum);
}

debugger; findMaxConsecutive(array);











