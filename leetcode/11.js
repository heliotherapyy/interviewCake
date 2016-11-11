/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.
*/

function maxArea(height) {

  var left = 0;
  var right = height.length - 1;
  var maximum = getVolume(height, left, right);

  while (left < right) {
    maximum = Math.max(maximum, getVolume(height, left, right));
    if (height[left] <= height[right]) left++;
    else right--;
  }

  return maximum;
}

function getVolume(array, start, end) {
  var height = Math.min(array[start], array[end]);
  var width = end - start;

  return height * width;
}

var arr = [1,3,5,3,1,1];
var answer = maxArea(arr);
console.log(answer);