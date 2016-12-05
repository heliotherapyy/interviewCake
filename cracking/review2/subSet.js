function findSubsets(arr) {
  if (!arr.length) return arr;
  var data = arr.slice();
  var prevs = [[]];
  // for (var i = 0; i < data.length; i++) {
  //   prevs.push([data[i]]);
  // }
  var result = [];
  var result = [[]];

  var cache = {};

  while (prevs.length) {
    var curr = [];
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      for (var j = 0; j < arr.length; j++) {
        if (prev.indexOf(arr[j]) === -1) {
          var candidate = prev.slice();
          var newChar = arr[j];
          candidate.push(newChar);
          sortArr(candidate);
          if (!cache[candidate]) {
            curr.push(candidate);
            cache[candidate] = true;
          }
        }
      }
    }
    prevs = curr.slice();
    update(result, curr);
    if (!curr.length) return result;
  }
}

function sortArr(arr) {
  arr.sort(function(a, b) {
    if (a < b) return -1;
    else return 1;
  });
}

function update(result, curr) {
  for (var i = 0; i < curr.length; i++) {
    result.push(curr[i]);
  }
}

var input = [1,2,3,4,5,6];
debugger; var output = findSubsets(input);
console.log(output);

