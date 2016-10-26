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

function helper(root) {
  if (!root) return true;

  var left = helper(root.left);
  if (left === -1) return -1;

  var right = helper(root.right);
  if (right === -1) return -1;

  // Now logic comes
  if (root.left) {
    var left = {};
    left.firstLeaf = findFirstLeaf(root.left);
    left.lastLeaf = findLastLeaf(root.left);
  }

  if (root.right) {
    var right = {};
    var firstLeaf = findFirstLeafHelper(root.right);
    right.firstLeaf = findFirstLeaf(root.right, firstLeaf);
    right.lastLeaf = findLastLeaf(root.right);
  }

  var diff1, diff2;
  if (left && right) {
    diff1 = Math.abs(left.firstLeaf - right.lastLeaf);
    diff2 = Math.abs(right.firstLeaf - left.lastLeaf);

    if (diff1 > 1 || diff2 > 1) return -1;
  } else if (left) {
    diff1 = Math.abs(left.firstLeaf - left.lastLeaf);
    if (diff1 > 1) return -1;
  } else {
    diff2 = Math.abs(right.firstLeaf - right.lastLeaf);
    if (diff2 > 1) return -1;
  }

  return true;
}

function findFirstLeafHelper(root) {
  var queue = [];
  queue.push(root);
  while (queue.length) {
    var popped = queue[0];
    queue = queue.slice(1);
    if (isChild(popped)) return popped;
    if (popped.left) queue.push(popped.left);
    if (popped.right) queue.push(popped.right);
  }

}

function findFirstLeaf(root, target) {
  if (!root) return 10000;
  else if (root.value === target.value) return 1;
  else return Math.min(firstFindLeaf(root.left), firstFindLeaf(root.right)) + 1;
}

function findLastLeaf(root) {
  if (!root) return 0;
  else {
    return Math.max(findLastLeaf(root.left), findLastLeaf(root.right)) + 1;
  }
}

function isSuperBalanced(root) {
  if (helper(root) === -1) {
    return false;
  } else {
    return true;
  }
}

var BinaryTree = function(data) {
  this.value = data;
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