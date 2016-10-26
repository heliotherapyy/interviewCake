function doesRouteExist(node1, node2, cache) {
  if (!cache) cache = {};

  if (!node1 || !node2) return false;
  if (node1.data === node2.data) return true;

  var adjs = node1.adjs;
  visit(node1, cache);
  for (var i = 0; i < adjs.length; i++) {
    var adj = adjs[i];
    if (cache[adj.data]) continue;

    visit(adj, cache);
    if (doesRouteExist(adj, node2, cache)) console.log(true);
  }

  console.log(false);
}

function visit(node, cache) {
  if (!cache[node.data]) cache[node.data] = true;
}

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

var first = new Node(1);
var second = new Node(2);


first.adjs = [second];
second.adjs = [first];


debugger; doesRouteExist(first, second);

debugger; var answer = doesRouteExist(one, two);
// console.log(answer);

