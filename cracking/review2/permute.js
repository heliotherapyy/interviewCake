function permute(str) {
  // var result = [];
  var prevs = [];
  update(prevs, str);

  while (prevs.length) {
    var curr = [];
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      for (var j = 0; j < str.length; j++) {
        if (prev.indexOf(str[j]) === -1) curr.push(prev + str[j]);
      }
    }
    if (!curr.length) return prevs;
    prevs = curr;

    // update(result, curr);
  }
}

function update(arr, data) {
  for (var i = 0; i < data.length; i++) {
    arr.push(data[i]);
  }
}

var output = permute("abcd");
console.log(output);
console.log(output.length);
