function isSubTree(root1, root2) {
  var sameRoots = findRoot(root1, root2);
  for (var i = 0; i < sameRoots.length; i++) {
    var root = sameRoots[i];
    if (isSame(root, root2)) {
      return true;
    }
  }
  return false;
}

function findRoot(root1, root2) {
  var queue = [];
  queue.push(root1);
  var sameRoots = [];

  while (queue.length !== 0) {
    var parent = queue[0];
    queue = queue.slice(1);
    if (parent.data === root2.data) {
      sameRoots.push(parent);
    }
    if (parent.left) {
      queue.push(parent.left);
    }
    if (parent.right) {
      queue.push(parent.right);
    }
  }
  return sameRoots;
}

function isSame(from, to) {
  if (!to) {
    return true;
  }

  if (from.data !== to.data) {
    return false;
  }

  if (!to.left && !to.right) {
    return true;
  }

  return isSame(from.left, to.left) && isSame(from.right, to.right);
}

var BinaryTree = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var A = new BinaryTree('A');
A.left = new BinaryTree('B');
var B = A.left;
A.right = new BinaryTree('C');
var C = A.right;

B.left = new BinaryTree('D');
var D = B.left;
B.right = new BinaryTree('E');
C.left = new BinaryTree('F');
C.right = new BinaryTree('G');

D.left = new BinaryTree('H');
D.left.left = new BinaryTree('J');

var a = new BinaryTree('A');
a.left = new BinaryTree('B');
var b = a.left;
a.right = new BinaryTree('C');
var c = a.right;

b.left = new BinaryTree('D');
var d = b.left;
b.right = new BinaryTree('E');
c.left = new BinaryTree('KK');
c.right = new BinaryTree('G');

d.left = new BinaryTree('H');
d.left.left = new BinaryTree('J');

isSame(A, a);
