var array = [[1,0],[3,1],[4,2],[2,1]];

function topologicalSort(array) {
  var prereq = findPrereq(array);

  var list = [];
  var visited = {};
  var cache = {};
  update(cache, array);

  topologicalVisit(array, prereq, list, visited, cache);

  return list;
}

function topologicalVisit(array, start, list, visited, cache) {
  list.push(start);
  visit(start, visited);

  var classes = cache[start];
  if (!classes) return;
  for (var i = 0; i < classes.length; i++) {
    var class1 = classes[i];
    if (!isVisited(class1, visited)) {
      topologicalVisit(array, class1, list, visited, cache)
    }
  }
}

function findPrereq(array) {
  var min = array[0][1];

  for (var i = 1; i < array.length; i++) {
    if (array[i][1] < min) min = array[i][1];
  }

  return min;
}

function visit(class1, cache) {
  cache[class1] = true;
}

function isVisited(class1, cache) {
  return (cache[class1] === true);
}

function update(cache, array) {
  for (var i = 0; i < array.length; i++) {
    var pair = array[i];
    var prereq = pair[1];

    if (!cache[prereq]) {
      cache[prereq] = [pair[0]];
    } else {
      cache[prereq].push(pair[0]);
    }

  }
}

debugger; var answer =  topologicalSort(array);
console.log(answer);


