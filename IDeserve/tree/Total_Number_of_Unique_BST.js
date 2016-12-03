var uniqueBSTs = function(value) {
  var total = 0;
  for (var i = 1; i <= value; i++) {
    total += helper(i, value);
  }

  return (!total) ? 1 : total;
}

var helper = function(root, value) {
  return uniqueBSTs(root - 1) * uniqueBSTs(value - root);
}

debugger; var output = uniqueBSTs(1);
console.log(output);