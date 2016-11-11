/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/*
-4 -1 -1 0 1 2
*/

function threeSum(nums) {
  nums.sort(function (a, b) {
    if (a < b) return -1;
    else return 1;
  });

  var result = [];
  var cache = {};

  for (var i = 0; i < nums.length - 2; i++) {

    var ptr1 = i + 1;
    var ptr2 = nums.length - 1;
    var target = 0 - nums[i];

    while (ptr1 < ptr2) {
      var sum = nums[ptr1] + nums[ptr2];
      var data = [nums[i], nums[ptr1], nums[ptr2]];
      if (sum === target) {
        if (!cache[data]) {
          cache[data] = true;
          result.push(data);
        }
        ptr1++;
        continue;
      } else if (sum > target) {
        ptr2--;
      } else {
        ptr1++;
      }
    }
  }
  console.log(result);
  return result;
}

var arr = [-1, 0, 1, 2, -1, -4];
threeSum(arr)