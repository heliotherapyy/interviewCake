var createMatrix = function(m, n) {
  var matrix = [];
  for (var i = 0; i < m; i++) {
    var row = [];
    matrix.push(row);
  }
  return matrix;
}

function maxCoins(iNums) {
  var nums = [];
  var n = 1;
  for (var i = 0; i < iNums.length; i++) {
    var x = iNums[i];
    if (x > 0) nums[n++] = x;
  }
  nums[0] = nums[n++] = 1;

  var memo = createMatrix(n, n);
  return burst(memo, nums, 0, n - 1);

}

function burst(memo, nums, left, right) {
  if (left + 1 === right) return 0;
  if (memo[left][right])  return memo[left][right];

  var ans = 0;
  for (var i = left + 1; i < right; i++) {
    ans = Math.max(ans, nums[left] * nums[i] * nums[right] + burst(memo, nums, left, i) + burst(memo, nums, i, right));
  }
  memo[left][right] = ans;
  return ans;
}

var input = [3,1,5,8];
debugger; var output = maxCoins(input);
console.log(output);
