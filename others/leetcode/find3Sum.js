
// Should check duplicates at the very top
function find3Sum(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var first = arr[i];
    var rem = 0 - first;
    find2Sum(arr, i, rem, result);
  }
  return result;
}

function find2Sum(arr, j, total, result) {
  var cache = {};
  var results = {};
  initialize(cache, arr, i);

  for (var i = 0; i < arr.length; i++) {
    if (i === j) continue;
    var rem = total - arr[i];
    if (cache[rem]) {
      var data = [arr[j], arr[i], rem];
      data.sort(function(a,b) {
        if (a < b) return -1;
        else return 1;
      })
      if (isDuplicate(data, results)) continue;
      if (rem === arr[j] && cache[rem] > 1) {
        result.push(data);
      } else {
        result.push(data);
      }
      update(results, data);
    }
  }
}

function isDuplicate(array, cache) {
  return cache[array] === true;
}

function update(results, arr) {
  arr.sort(function(a, b) {
    if (a < b) return -1;
    else return 1;
  })

  results[arr] = true;
}

function initialize(cache, arr, j) {
  for (var i = 0; i < arr.length; i++) {
    if (i === j) continue;
    var data = arr[i];
    cache[data] = (!cache[data]) ? 1 : cache[data]++;
  }
}

var array = [-1, 0, 1, 2, -1, -4];
// debugger; var answer = find3Sum(array);
// console.log(answer);


function find3Sum(arr, target) {
  var candidates = {};
  for (var i = 0; i < arr.length; i++) {
    var first = arr[i];
    var rem = target - first;
    find2Sum(arr, i, candidates, rem);
  }

  var answer = closest(candidates, target);
  return answer;
}

function find2Sum(arr, i, result, rem) {
  var candidates = {};
  var cache = {};
  initialize(cache, arr, i);
  var best;

  for (var j = 0; j < arr.length; j++) {
    if (j === i) continue;
    var first = arr[j];
    var second = findClosest(cache, rem - first);
    if (!best) best = [first, second];
    else {
      var sum1 = first + second;
      var sum2 = best[0] + best[1];
      var flag = findCloser(sum1, sum2, rem);
      if (flag === 1) {
        best = [first, second];
      }
    }
  }

  update(candidates, [arr[i], first, second]);
}








