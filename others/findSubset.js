/*
  prevs: [ab ac bc]
  current: [abc]
  result: [a,b,c, ab, ac, bc ]
*/

// [a,b,c]
function findSubset(array) {
  var result = array.slice();
  var prevs = array.slice();
  var current = [];

  while (true) {
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      for (var j = 0; j < array.length; j++) {
        var newChar = array[j] // c
        if (newChar <= prev[prev.length - 1]) {
          continue;
        }
        var newCombi = prev + newChar; // abc
        current.push(newCombi); //
        if (isEqual(current, [array.join("")])) {
          update(result, current);
          return result;
        }
      }
    }

    prevs = current;
    current = [];
    update(result, prevs);

  }
}

function isEqual(array1, array2) {
  return array1[0] === array2.join("");
}

function update(to, from) {
  for (var i = 0; i < from.length; i++) {
    to.push(from[i]);
  }
}