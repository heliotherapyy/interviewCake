function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

// Wrong
function superBalanced(root) {
  if (!root) {
    return true;
  }

  if (root.left) {
    var left_flag = superBalanced(root.left);
    if (left_flag === -1) {
      return -1;
    }
  }

  if (root.right) {
    var right_flag = superBalanced(root.right);
    if (right_flag === -1) {
      return -1;
    }
  }

  var left_height = getHeight(root.left);
  var right_height = getHeight(root.right);

  if (Math.abs(left_height - right_height) > 1) {
    return -1;
  } else {
    return true;
  }
}

function getHeight(root) {
  if (!root) {
    return 0;
  }

  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
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

function main(root) {
  if (superBalanced(root) === -1) {
    return false;
  } else {
    return true;
  }
}

debugger; console.log(main(A));
