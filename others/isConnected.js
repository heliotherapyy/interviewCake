function Node(value) {
  this.data = value;
  this.adjs = [];
}

var one = new Node(1);
var two = new Node(2);
var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');

one.adjs = [A, B, C];
A.adjs = [one];
B.adjs = [one];
C.adjs = [one, D, E];
D.adjs = [C, two];
E.adjs = [C];



/*
	Main Function
*/

function isConnected(root, target, cache) {
	if (!root || !target) return false;
	else if (root.data === target.data) return true;

	visit(root, cache);

	var adjs = root.adjs;
	for (var i = 0; i < adjs.length; i++) {
		var adj = adjs[i];
		if (!isVisited(adj, cache)) {
			if (isConnected(adj, target, cache)) {
				return true;
			}
		}
	}
}

function visit(node, cache) {
	cache[node.data] = true;
}

function isVisited(node, cache) {
	return cache[node.data] === true;
}

/*
      1 - A
    /   \
  B      C - E
        /
      D
        \
          2

*/

debugger; var flag = isConnected(one, two, {});
console.log(flag);

