/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var result = nums[0];
    var prevMax = nums[0];
    var prevMin = nums[0];

    var currentMax;
    var currentMin;
    for (var i = 1; i < nums.length; i++) {
      var num = nums[i];
      if (num > 0) {
        currentMax = Math.max(prevMax * num, num);
        currentMin = Math.min(prevMin * num, num);
      } else {
        currentMax = Math.max(prevMin * num, num);
        currentMin = Math.min(prevMax * num, num);
      }

      prevMax = currentMax;
      prevMin = currentMin;

      result = Math.max(result, prevMax);
    }

    return result;
};

var array = [-4,-3,-2];
debugger; maxProduct(array);