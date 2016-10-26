var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// Profit: Max - min
// O(n)
function getMaxProfit(array) {
  var min, max;
  min = max = array[0];
  var maxProfit;
  for (var i = 1; i < array.length; i++) {
    var price = array[i];
    min = Math.min(min, price);
    max = Math.max(max, price);

    if (!maxProfit) {
      maxProfit = max - min;
    } else {
      maxProfit = Math.max(maxProfit, max - min);
    }
  }

  console.log(maxProfit);
  return maxProfit;
}

getMaxProfit(stockPricesYesterday);

