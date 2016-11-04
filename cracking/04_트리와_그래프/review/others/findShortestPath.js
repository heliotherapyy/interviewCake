function Node(value) {
  this.data = value;
  this.adjs = [];
}

var one = new Node(1);
var two = new Node('2');
var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');
var three = new Node(3);

var outsider = new Node('Z');

// undirected
one.adjs = [A, B, C, D];
A.adjs = [one];
B.adjs = [one];
C.adjs = [one, E, D];
D.adjs = [C, one, two];
two.adjs = [D, three];
three.adjs = [two];

/*
      1 - A
    / | \
  B   |  C - E
      | /
      D
        \
          2 -- 3
*/

function findShortestPath(origin, dest, Visited, Path) {
	var path = [origin.data];
	if (origin.data === dest.data) return path;

	if (!Visited) var Visited = {};
	if (!Path) var Path = {};
	
	var queue = [];
	queue.push(origin);
	visit(origin, Visited);
	record(origin, Path, null);

	while (queue.length) {
		var predecessor = queue[0];
		queue = queue.slice(1);

		var neighbors = predecessor.adjs;
		for (var i = 0; i < neighbors.length; i++) {
			var neighbor = neighbors[i];
			if (!isVisited(neighbor, Visited)) {
				queue.push(neighbor);
				visit(neighbor, Visited);
				record(neighbor, Path, predecessor);
			}

			if (neighbor.data === dest.data) {
				Path[neighbor.data].push(neighbor.data);
				return Path[neighbor.data];
			}
			
		}
	}
}

debugger; var path = findShortestPath(A, D);
console.log(path);

function visit(node, Visited) {
	Visited[node.data] = true;
}

function isVisited(node, Visited) {
	return Visited[node.data] === true;
}

function record(node, Path, predecessor) {
	if (!predecessor) Path[node.data] = [];
	else {
		Path[node.data] = Path[predecessor.data].slice();
		Path[node.data].push(predecessor.data);
	}
}



