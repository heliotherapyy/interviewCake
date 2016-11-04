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

// DFS Search
function isConnected(origin, dest, cache) {
  if (!origin | !dest) return false;
  if (origin.data === dest.data) return true;

  visit(origin, cache);
  for (var i = 0; i < origin.adjs.length; i++) {
    var adj = origin.adjs[i];
    if (!isVisited(adj, cache) && isConnected(adj, dest, cache)) {
      return true;
    }
  }
}

function visit(node, cache) {
  cache[node.data] = true;
}

function isVisited(node, cache) {
  return cache[node.data] === true;
}

debugger; var answer = isConnected(one, two, {});
console.log(answer);