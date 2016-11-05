function subSet(arr) {
  var result = arr.slice();
  var prevs = arr.slice();
  var chars = arr.slice();
  var current = [];

  while (true) {
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      for (var j = 0; j < chars.length; j++) {
        var char = chars[j];
        if (!doesContain(prev, char)) {
          var combi = prev + char;
          current.push(combi);
          if (combi.length === chars.length) {
            update(result, current);
            result.push("empty");
            return result;
          }
        }
      }
    }

    prevs = current;
    current = [];
    update(result, prevs);
  }
}

function update(result, arr) {
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
}

function doesContain(prev, current) {
  if (prev[prev.length - 1] <= current) return true;
}

var array = ['c', 'b', 'a', 'd'];
debugger; var answer = subSet(array);
console.log(answer);