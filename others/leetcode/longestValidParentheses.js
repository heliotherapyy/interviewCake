function longestValidParentheses(s) {
  var stack = [];
  stack.push(-1);
  var max = 0;

  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (char === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length) {
        max = Math.max(max, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }

  return max;
}

var string = ")()())"
debugger; var answer = longestValidParentheses(string);
console.log(answer);