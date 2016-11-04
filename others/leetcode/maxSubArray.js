/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var max = sum(nums, 0 , nums.length - 1);

    while (left < right) {
      var newLeft = moveLeft(nums, left, right);
      var newRight = moveRight(nums, right, left);

      if (newLeft !== -1 && newRight !== -1) {
        left = newLeft;
        right = newRight;
        max = Math.max(max, sum(nums, left, right));
      } else if (newLeft !== -1) {
        max = Math.max(max, sum(nums, newLeft, right));
        left = newLeft;
      } else {
        max = Math.max(max, sum(nums, left, newRight));
        right = newRight;
      }
    }

    return max;
};

function sum(nums, start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += nums[i];
  }
  return sum;
}

function moveLeft(nums, left, right) {
  var sum = 0;
  var firstFound;

  for (var i = left; i <= right; i++) {
    var num = nums[i];
    sum += num;
    if (sum < 0) return i + 1;
  }

  return -1;
}

function moveRight(nums, right, left) {
  var sum = 0;
  var firstFound;

  for (var i = right; i >= left; i--) {
    var num = nums[i];
    sum += num;
    if (sum < 0) return i - 1;
  }

  return -1;
}

var array = [-2, -1];
debugger; var answer = maxSubArray(array);
console.log(answer);










/*
 * Version 2
*/
var maxSubArray = function(nums) {

    var max = nums[0];
    var newSum = nums[0];

    for (var i = 1; i < nums.length; i++) {
      newSum = Math.max(max + nums[i], nums[i]);
      max = Math.max(max, newSum);
    }

    return max;
};

var answer = maxSubArray([-1,-2]);
console.log(answer);
