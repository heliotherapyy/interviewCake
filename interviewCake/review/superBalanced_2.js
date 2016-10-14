function isSuperBalanced(root) {
  var minDepth = find_minDepth(root);
  var maxDepth = getHeight(root) - 1;

  if (Math.abs(minDepth - maxDepth) > 1) {
    return false;
  } else {
    return true;
  }
}

function find_minDepth(root) {
  var nodesByDepth = [];
  var parents = [];
  var current = [];

  if (!root) {
    console.error("No root is given");
    return -1;
  }

  if (!root.left && !root.right) {
    return 0;
  }

  parents.push(root);
  nodesByDepth.push(parents);
  while (parents.length !== 0) {
    current = [];
    for (var i = 0; i < parents.length; i++) {
      var parent = parents[i];
      if (parent.left) {
        current.push(parent.left);
      }
      if (parent.right) {
        current.push(parent.right);
      }
      if (containLeaf(current)) {
        return nodesByDepth.length;
      } else {
        nodesByDepth.push(current);
        parents = current;
      }
    }
  }
}

function containLeaf(array) {
  for (var i = 0; i < array.length; i++) {
    var node = array[i];
    if (!node.left && !node.right) {
      return true;
    }
  }
  return false;
}

function getHeight(root) {
  if (!root) {
    return 0;
  } else {
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
  }
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

var answer = isSuperBalanced(A);
console.log(answer);