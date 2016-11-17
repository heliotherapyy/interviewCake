// Replace the value in arr that is greater than target for the first time
function update(arr, left, right, target) {
  while (left + 1 !== right) {
    var mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid;
    else right = mid;
}
return right;
}


function main(arr) {
  var result = [];
  result.push(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < result[0]) result[0] = arr[i];
    else if (arr[i] > result[result.length - 1]) {
      result.push(arr[i]);
} else {
  var targetIndex = update(arr, -1, result.length - 1, arr[i]);
  result[targetIndex] = arr[i];
}
}


return result.length;
}


// DP
function lengthOfLIS(arr) {

  var memo = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    var maxLength = helper(memo, arr[i]);
    if (!maxLength) maxLength = 1;
    memo.push([arr[i], maxLength + 1]);
  }

  return findMax(memo);
}

var arr = [10, 9, 2, 5, 3, 7, 101, 18];

function helper(arr, target) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] < target) continue;
    else {
      max = Math.max(arr[i][1], max);
    }
  }
  return max;
}

function findMax(arr) {
  var max = arr[0][1];
  for (var i = 1; i < arr.length; i++) {
    max = Math.max(max, arr[i][1]);
  }
  return max;
}

lengthOfLIS(arr);