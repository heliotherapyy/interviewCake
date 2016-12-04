function sortStack(s1) {
  var s2 = [];
  while (s1.length) {
    if (s2[s2.length - 1] < s1[s1.length - 1] || !s2.length) {
      s2.push(s1.pop());
    } else {
      var popped = s1.pop();
      var count = 0;
      while (s2.length && s2[s2.length - 1] > popped) {
        s1.push(s2.pop());
        count++;
      }
      s2.push(popped);
      for (var i = 0; i < count; i++) {
        s2.push(s1.pop());
      }
    }
  }
  return s2;
}

var s1 = [3,2,7,15,10];
debugger; var sorted = sortStack(s1);
console.log(sorted);