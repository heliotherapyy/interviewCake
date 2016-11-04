// This is done by using queue
function findDepth(root, node) {
  var count = 1;
  var cache = {};
  var prevs = new Queue();
  var current = new Queue();

  while (!prevs.isEmpty()) {
    var data = prevs.dequeue();
    visit(data, cache);
    var adjs = data.adjs;

    for (var i = 0; i < adjs.length; i++) {
      var adj = adjs[i];
      if (!isVisited(adj, cache)) {
        current.enqueue(adj);
      }
    }

    if (prevs.isEmpty()) {
      prevs = current;
      current = new Queue();
      count++;
    }
  }

  return count;
}

function visit(node, cache) {
  if (!cache[node.data]) cache[node.data] = true;
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
  핵심은 Queue 를 두개를 만드는 것이었다.
  그러니까 내가 지금까지 Array로 만든 것들이 사실 Queue 의 변종이었던 것이다

  핵심은, Queue가 Depth를 알려주지 않는다고 하는게 아니라
  Queue 를 하나 더 만들면 되는거였다 바보야

*/
function findDepth(root, node) {
  var count = 1;
  var cache = {};

  // visit 이 없으면 계속해서 사이클을 돌것입니다
  visit(root, cache);
  var prevs = root.adjs;
  var current = [];

  while (prevs.length) {
    var data = prevs[0];
    prevs = prevs.slice(1);
    visit(data, cache);
    var adjs = data.adjs;

    for (var i = 0; i < adjs.length; i++) {
      var adj = adjs[i];
      if (adj.data === node.data) return count + 1;
      if (!cache[adj.data]) {
        current.push(adj);
      }
    }

    // Now we are done with nth depth
    // Time to go deeper!
    if (!prevs.length) {
      prevs = current;
      current = [];
      count++;
    }
  }

  return count;
}

// debugger; var depth = findDepth(one, E);
// console.log(depth);

function LLNode(value) {
  this.data = value;
  this.next = null;
}

function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(value) {
  var newNode = new LLNode(value);

  if (!this.head) {
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
}

Queue.prototype.dequeue = function() {
  var dequeued = this.head;
  this.head = this.head.next;
  if (!this.head) this.head = this.tail = null;
  return dequeued;
}

Queue.prototype.isEmpty = function() {
  return (this.head === null);
}

function findDepth(root, target, cache) {
  var parents = new Queue();
  var children = new Queue();
  parents.enqueue(root);

  var count = -1;

  while (!parents.isEmpty()) {
    var popped = parents.dequeue().data;
    if (popped.data === target.data) {
      return count + 1;
    }
    visit(popped, cache);

    var adjs = popped.adjs;
    for (var i = 0; i < adjs.length; i++) {
      if (!isVisited(adjs[i], cache)) {
        children.enqueue(adjs[i]);
      }
    }

    if (parents.isEmpty()) {
      parents = children;
      children = new Queue();
      count++;
    }
  }
}

function isVisited(node, cache) {
  return cache[node] === true;
}

debugger; var flag = findDepth(A, E, {});
console.log(flag);