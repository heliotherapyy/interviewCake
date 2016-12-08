function Node(value) {
  this.value = value;
  this.adjs = [];
}

var one = new Node(1);
var two = new Node('2');
var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');

one.adjs = [A, B, C];
A.adjs = [one];
B.adjs = [one];
C.adjs = [one, E, D];
D.adjs = [two, C];
E.adjs = [C];
two.adjs = [D];

/*
      1 - A
    /   \
  B      C - E
        /
      D
        \
          2

*/

var BFS = function(start) {
  var visited = {};
  var result = {};
  var depth = 1;

  var queue = [];
  queue.push(start);
  visited[start.value] = true;

  while (true) {
    var curr = [];
    while (queue.length) {
      var popped = queue[0];
      queue = queue.slice(1);

      // for unvisited neighbors, add to queue
      for (var i = 0; i < popped.adjs.length; i++) {
        var neighbor = popped.adjs[i];
        if (!visited[neighbor.value]) {
          curr.push(neighbor);
          visited[neighbor.value] = true;
        }
      }
    }

    if (!curr.length) return result;
    result[depth++] = curr;
    queue = curr;
  }

  return result;
}

var output = BFS(one);
console.log(output);