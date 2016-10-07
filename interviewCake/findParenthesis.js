var string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

function findParenthesis(string, index) {
  if (index < 0 || index > string.length - 1) {
    return -1;
  }

  var found;
  var count = 0;
  for (var i = index; i < string.length; i++) {

    if (string[i] === "(") {
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

var answer = findParenthesis(string, 10);
console.log(answer);