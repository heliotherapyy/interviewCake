/*
"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false
*/

var brackets = ["{", "[", "("];

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

    var flag = findInnerPairs(innerPairs, string, start + 1, end - 1);
    innerPairs.forEach(function(pair) {
      return bracketValidator(string, pair[0], pair[1]);
    })
  }
}

function findInnerPairs(array, string, start, end) {
  var count = 0;
  while (start < end) {
    var first = string[start];
    if (isOpeningBracket(first)) {
      count++;
      var index = start + 1;
      while (index <= end) {
        if (string[index] === first) count++;
        else if (string[index] === findMatch(first)) count--;
        index++;
        if (!count) {
          array.push([start, index - 1]);
          start = index;
          break;
        } else if (index > end) {
          break;
        }
      }
    }
  }
  console.log(array);
}

function isOpeningBracket(char) {
  for (var i = 0; i < brackets.length; i++) {
    if (brackets[i] === char) {
      return true;
    }
  }

  return false;
}

function findMatch(char) {
  if (char === "{") return "}";
  else if (char === "[") return "]";
  else if (char === "(") return ")";
  return null;
}

var matched = findMatch("(")
console.log(matched);

var string = "()[[]"
var array = [];
// debugger; findInnerPairs(array, string, 0, string.length - 1);

