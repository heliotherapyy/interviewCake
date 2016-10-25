/*
  중복된 문자가 없는 문자열의 모든 순열을 구하라
*/

var string = "abcd"

/*
  a b c d
  ab ac ad ba bc bd ca cb cd da db dc
  abc abd acb acd adb adc bac bad bca bcd bda bdc
*/

function findPermutation(string) {
  var chars = string.split("");
  var prevs = chars.slice();
  var current = [];

  while (true) {
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      for (var j = 0; j < chars.length; j++) {
        var newChar = chars[j];
        if (prev.indexOf(newChar) === -1) {
          current.push(newChar + prev);
        }
      }
    }

    prevs = current;
    current = [];
    if (prevs[0].length === chars.length) {
      break;
    }
  }

  console.log(prevs);
  return prevs;
}

findPermutation("ab");