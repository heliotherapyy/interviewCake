var findPalindrome = function(str) {
  var longest = str[0];
  for (var i = 1; i < str.length; i++) {
    var prevIdx = i - 1;
    var nextIdx = i;
    var current = "";

    var prev = str[prevIdx];
    var next = str[nextIdx];

    while (prev && next && prev === next) {
      prevIdx--;
      nextIdx++;

      current = prev + current + next;
      prev = str[prevIdx];
      next = str[nextIdx];
    }

    longest = (current.length > longest.length) ? current : longest;
  }

  return longest;
}

var input = "forgeeksskeegfor";
var result = findPalindrome(input);

console.log(result);