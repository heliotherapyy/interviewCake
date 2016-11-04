function greatestSum(array) {
  var prev = {
    total: 0,
    array: []
  };

  update(prev, array[0]);
  var best;
  for (var i = 1; i < array.length; i++) {
    var current = array[i];
    if (prev.total + current < 0) {
      reset(prev);
      continue;
    } else {
      update(prev, current);
      best = updateBest(best, prev);
    }
  }

  return best.array;
}

function update(prev, data) {
  prev.total += data
  prev.array.push(data);
}

function reset(prev) {
  prev.total = 0;
  prev.array = [];
}

function updateBest(best, prev) {
  if (!best) {
    best = {};
    best.total = prev.total;
    best.array = prev.array.slice();
  } else {
    if (best.total < prev.total) {
      best.total = prev.total;
      best.array = prev.array.slice();
    }
  }
  return best;
}

var array = [2,-8,3,-2,4,-10];
debugger; var subArr = greatestSum(array);
console.log(subArr);
