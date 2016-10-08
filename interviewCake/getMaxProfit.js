var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

var answer = getMaxProfit(stockPricesYesterday);
console.log(answer);
// returns 6 (buying for $5 and selling for $11)

function getMaxProfit(array) {
  var min = array[0];
  var max_profit = array[1] - min;
  for (var i = 1; i < array.length; i++) {
    var current_profit = array[i] - min;
    min = Math.min(min, array[i]);
    max_profit = Math.max(max_profit, current_profit);
  }
  return max_profit;
}
