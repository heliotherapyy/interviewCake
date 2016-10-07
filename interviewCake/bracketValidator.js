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

    findInnerPairs(innerPairs, string, start + 1, end - 1);
    innerPairs.forEach(function(pair) {
      return bracketValidator(string, pair[0], pair[1]);
    })
  }
}

function findInnerPairs(array, string, start, end) {
  while (start < end) {
    var first = string[start];
    var count = 0;

    if (isOpeningBracket(first)) {
      count++;
      var index = start + 1;
      while (index <= end) {
        if (arr[index] === first) count++;
        else if (arr[index] === findMatch(first)) count--;
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

var string = "(){}[[]]"
var array = [];
findInnerPairs(array, string, 0, string.length - 1);
