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

var outsider = new Node('Z');

// undirected
one.adjs = [A, B, C, D];
A.adjs = [one];
B.adjs = [one];
C.adjs = [one, E, D];
D.adjs = [C, one, two];
two.adjs = [D];

/*
      1 - A
    / | \
  B   |  C - E
      | /
      D
        \
          2

*/
/*
	Assume all nodes are unique
*/
function isConnected(origin, dest, Visited) {
	if (origin.data === dest.data) {
		return true;
	}

	if (!Visited) var Visited = {}; // key: node.data / value: true
	visit(origin, Visited);

	var neighbors = origin.adjs;
	for (var i = 0; i < neighbors.length; i++) {
		var neighbor = neighbors[i];
		if (!isVisited(neighbor, Visited) && isConnected(neighbor, dest, Visited)) {
			return true;
		}
	}

	return false;
}

var answer = isConnected(one, outsider);
console.log(answer);

function visit(node, Visited) {
	Visited[node.data] = true;
}

function isVisited(node, Visited) {
	return Visited[node.data] === true;
}










