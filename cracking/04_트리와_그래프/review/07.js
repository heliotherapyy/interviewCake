/*
  최대한 High-Level로 먼저 작성하기
      1
     / \
    2   3
   / \
  4   5
   \
     7
*/

var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var seven = new Node(7);

var eight = new Node(8);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
four.right = seven;

function commonAncestor(root, node1, node2) {
  // BFS traverse
  var queue = []
  if (root) queue.push(root);
  else return false;


  var lastAncestor;
  while (queue.length) {
    var popped = queue[0];
    queue = queue.slice(1);

    var left = popped.left;
    var right = popped.right;

    if (commonAncestorHelper(left, node1, node2)) {
     queue.push(left);
     lastAncestor = left;
    } else if (commonAncestorHelper(right, node1, node2)) {
      queue.push(right);
      lastAncestor = right;
    }
  }

  return lastAncestor;
}

// O(n)
function commonAncestorHelper(root, node1, node2) {
  if (!root) return false;

  if (root.data === node1.data) {
    return contains(root, node2);
  } else if (root.data === node2.data) {
    return contains(root, node1);
  }

  return commonAncestorHelper(root.left, node1, node2) || commonAncestorHelper(root.right, node1, node2);
}

// O(n)
function contains(root, target) {
  if (!root) return false;

  if (root.data === target.data) return true;
  else {
    return contains(root.left, target) || contains(root.right, target);
  }
}

debugger; answer = commonAncestor(one, four, seven);
console.log(answer);
