function makeCombinations(n) {
  var prevs = ['()'];
  var current = [];
  var step = 1;
  while (step < n) {
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      var newPair = '()';

      // first step
      var first = '(' + prev + ')';
      current.push(first);

      // second step
      var second1 = newPair + prev;
      if (i !== prevs.length - 1) {
        var second2 = prev + newPair;
      }
      current.push(second1);
      if (second2) {
        current.push(second2);
        second2 = null;
      }
    }
    prevs = current;
    current = [];
    step++;
  }

  console.log(prevs);
}

debugger; makeCombinations(3);