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
C.adjs = [E, D];
D.adjs = [two];




/*
      1 - A
    /   \
  B      C - E
        /
      D
        \
          2

*/

function printShortestRoute(start, end, Visited, Route) {

  Route = (!Route) ? {} : Route;
  Visited = (!Visited) ? {} : Visited;

  var queue = [];
  queue.push(start);
  Visited[start.value] = true;
  Route[start.value] = [];

  while (queue.length) {
    var node = queue[0];
    queue = queue.slice(1);

    for (var i = 0; i < node.adjs.length; i++) {
      var neighbor = node.adjs[i];
      if (!Visited[neighbor.value]) {
        queue.push(neighbor);
        Visited[neighbor.value] = true;
        Route[neighbor.value] = Route[node.value].slice();
        Route[neighbor.value].push(node.value);

      }
    }
  }

  return Route[end.value];
}

debugger; var route = printShortestRoute(one, two);
console.log(route);
