/* Note

*/

// 'abc'
function permutate(string) {
  var chars = string.split("");
  var prevs = chars.slice();
  var current = [];

  while (true) {
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      for (var j = 0; j < chars.length; j++) {
        var newChar = chars[j];
        if (prev.indexOf(newChar) !== -1) continue;

        var newCombi = prev + newChar;
        current.push(newCombi);
      }
    }

    if (current.length === 0) {
      console.log(prevs);
      return prevs;
      break;
    }
    prevs = current;
    current = [];
  }
}

