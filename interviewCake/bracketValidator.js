/*
"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false
*/

function bracketValidator(string, start, end) {
  if (start === end || (end - start + 1) % 2 !== 0) {
    return false;
  }

  if (start < end) {
    var innerPairs = [];

    // base case
    if (string[end] !== findMatch(string[start])) {
      return false;
    }

    innerPairs = findInnerPairs(innerPairs, string, start + 1, end - 1);
    if (innerPairs !== -1) {
      innerPairs.forEach(function(pair) {
        return bracketValidator(string, pair[0], pair[1]);
      });
    } else {
      return false;
    }
  }

  return true;
}

function findInnerPairs(array, string, start, end) {
  var length = (end - start) + 1;
  if (length % 2 !== 0) {
    return -1;
  }

  while (start < end) {
    var matchingIndex = findMatchingBracket(string, start);
    if (machingIndex !== -1) {
      array.push([start, matchingIndex]);
      if (matchingIndex < end - 1) {
        start = matchingIndex + 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }
}

function findMatchingBracket(string, index) {
  if (index < 0 || index > string.length - 1) {
    return -1;
  }

  var found;
  var count = 0;
  for (var i = index; i < string.length; i++) {

    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      count++;
    } else if (string[i] === ")") {
      count--;
    }

    if (!count) {
      found = i;
      return found;
    }
  }

  return -1;
}

var string = "(){}[[]]"
var array = [];
findInnerPairs(array, string, 0, string.length - 1);
