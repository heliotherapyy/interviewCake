/* Settings */
var Node = function(value) {
  this.value = value;
  this.left = this.right = null;
}

var zero = new Node(0);
var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var six = new Node(6);
var seven = new Node(7);
var eight = new Node(8);

one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = seven;

four.left = six;

seven.left = eight;

/*
          1
        2   3
      4  5    7
     6       8
*/

var getMinDepth = function(root) {
  if (!root) return -1;

  var nodesByDepth = [[root]];

  // using BFS
  var prevs = [];
  prevs.push(root);

  while (true) {
    var current = [];
    while (prevs.length) {
      var prev = prevs[0];
      prevs = prevs.slice(1);

      if (prev.left) current.push(prev.left);
      if (prev.right) current.push(prev.right);

      if (!prev.left && !prev.right) return nodesByDepth.length;
    }
    prevs = current;
    nodesByDepth.push(current);
  }
}

var minDepth = getMinDepth(one);
console.log(minDepth);

var optimized = function(root) {
  if (!root) return 0;

  if (isLeaf(root)) return 1;

  var left = (root.left) ? optimized(root.left) : Number.MAX_SAFE_INTEGER;
  var right = (root.right) ? optimized(root.right) : Number.MAX_SAFE_INTEGER;

  return 1 + Math.min(left, right);
}

var isLeaf = function(root) {
  return (!root.left && !root.right);
}

var output = optimized(one);
console.log(output);













