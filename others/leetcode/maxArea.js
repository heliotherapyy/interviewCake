/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = 0;
  var left = 0;
  var right = height.length - 1;
  while (left < right) {
    var volume = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, volume);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

var height = [2,3,4,5,18,17,6];
debugger; var answer = maxArea(height);
console.log(answer);

