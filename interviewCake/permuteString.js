function permuteString(string, permutations) {
  if (string === "") {
    console.log(permutations);
    return;
  }
  var first = string[0];
  var rest = string.slice(1);

  update(permutations, first);
  return permuteString(rest, permutations);
}

function update(array, char) {
  if (!array.length) {
    array.push(char);
    return;
  }

  var original_length = array.length;
  var limit = array[0].length + 1;
  for (var i = 0; i < original_length; i++) {
    var str = array[i];
    for (var j = 0; j < limit; j++) {
      if (j === 0) {
        array[i] = addUp(str, j, char);
      } else {
        array.push(addUp(str, j, char));
      }
    }
  }
}

function addUp(string, index, char) {
  var prev, next;
  prev = string.slice(0, index);
  next = string.slice(index);

  return prev + char + next;
}

var string = "ab";
permuteString(string, []);