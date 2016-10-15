var array = ['a', 'b', 'c'];


function findSubSets(array) {
  var result = array.slice();
  var prevs = result;
  var current = [];
  while (true) {

    if (flag) {
      break;
    }
    for (var i = 0; i < prevs.length - 1; i++) {
      var prev = prevs[i];
      for (var j = i; j < array.length; j++) {
        var next = array[j];
        if (next <= prev[prev.length - 1]) {
          continue;
        }
        if (prev.indexOf(next) == -1) {
          var combined = prev + next;
          current.push(combined);

          if (combined.length === array.length) {
            var flag = true;
          }
        }
      }
    }
    addData(result, current);
    prevs = current;
    current = [];
    if (prevs.length === 0) {
      break;
    }
  }
  return result;

}

function addData(result, current) {
  for (var i = 0; i < current.length; i++) {
    var data = current[i];
    result.push(data);
  }
}

debugger; var answer = findSubSets(array);
console.log(answer);