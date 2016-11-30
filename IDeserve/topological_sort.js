// Setting
var Node = function(value) {
  this.value = value;
  this.adjs = [];
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var six = new Node(6);

six.adjs = [five];
five.adjs = [two, four];
two.adjs = [one];
four.adjs [three];
three.adjs = [one];

var topologicalSort = function(start, Visited, result) {
  Visited = (!Visited) ? {} : Visited;
  result = (!result) ? [] : result;

  /* Pre-order */
  // Visited[start.value] = true;
  // result.push(start.value);

  var neighbors = start.adjs;
  for (var i = 0; i < neighbors.length; i++) {
    var neighbor = neighbors[i];
    if (!Visited[neighbor.value]) {
      topologicalSort(neighbor, Visited, result);
    }
  }

  /* Post-order */
  Visited[start.value] = true;
  result.push(start.value);

  return result;
}

var result = topologicalSort(six);
console.log(result);