/*
  주어진 이진 트리가 균형 이진 트리인지 판별하는 함수를 구현하라
  이 문제에서 이진 트리는 어떤 노드의 두 자식 트리 깊이가 하나 이상 차이나지 않는 트리이다
*/

// 09.02

// Helper Function
var getHeight = (root) => {
  if (!root) {
    return 0;
  }

  var left = getHeight(root.left);
  var right = getHeight(root.right);

  return Math.max(left, right) + 1;
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

// Main Function
var isBalanced = function(root) {

  var left = getHeight(root.left);
  var right = getHeight(root.right);

  var diff = right - left;

  if (Math.abs(diff) > 1) {
    return false;
  }

  return true;
}

// console.log(isBalanced(A));


/*
  October 3rd
*/

var Node = function(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

var root = new Node(20);
var root_left = root.left = new Node(10);
var root_right = root.right = new Node(30);

root_leftLeft = root_left.left = new Node(5);
root_leftRight = root_left.right = new Node(15);
root_rightLeft = root_right.left = new Node(25);
root_rightRight = root_right.right = new Node(40);
root_rightRightRight = root_rightRight.right = new Node(50);
root_rightRightRight.right = new Node(60);


function findHeight(node) {
  if (!node) {
    return 0;
  }

  var height = 1 + Math.max(findHeight(node.left), findHeight(node.right));
  return height;
}

function isBalanced(node) {
  if (!node) {
    return true;
  }

  var left_height;
  var right_height;

  left_height = findHeight(node.left);
  right_height = findHeight(node.right);

  var result;

  (Math.abs(left_height, right_height) > 1) ? result = false : result = isBalanced(node.left) && isBalanced(node.right);
  return result;
}

var answer = isBalanced(root);
console.log(answer);

function isBalanced2(node) {
  if (!node) {
    return 0;
  }

  var leftHeight = isBalanced2(node.left);
  if (leftHeight === -1) {
    return -1;
  }

  var rightHeight = isBalanced2(node.right);
  if (rightHeight === -1) {
    return -1;
  }

  var diff = Math.abs(leftHeight - rightHeight);
  if (diff > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function final(node) {
  if (isBalanced2(node) === -1) {
    return false;
  } else {
    return true;
  }
}

debugger; var answer = final(root);
console.log(answer);