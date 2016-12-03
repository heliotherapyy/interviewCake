// Divide and conquer + Memoize


var main = function(value) {
  var cache = {};
  return uniqueBSTs(value, cache);
}

var uniqueBSTs = function(value, cache) {

  if (cache[value]) return cache[value];

  var total = 0;
  for (var i = 1; i <= value; i++) {
    total += helper(i, value, cache);
  }

  if (total) cache[value] = total;
  return (!total) ? 1 : total;
}

var helper = function(root, value, cache) {
  return uniqueBSTs(root - 1, cache) * uniqueBSTs(value - root, cache);
}

debugger; var output = main(3);
console.log(output);