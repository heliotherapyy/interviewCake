/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isPositive = true;

    if (x < 0) {
      x = -x;
      isPositive = false;
    }

    var reversed = reverseHelper(String(x));
    if (!isPositive) {
      reversed = -reversed;
    }

    console.log(reversed);
    return reversed;
};

function reverseHelper(x) {
  var start = 0;
  var end = x.length - 1;
  x = x.split("");

  while (start < end) {
    swap(x, start, end);
    start++;
    end--;
  }

  x = x.join("");
  return Number(x);
}

function swap(arr, first, second) {
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;

}

var input = -123;
reverse(input);
