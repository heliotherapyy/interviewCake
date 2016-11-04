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

one.left = two;
one.right = three;
two.left = four;
two.right = five;
four.right = seven;


function isBalanced(root) {
  if (!root) return true;

  var flag1 = isBalanced(root.left);
  var flag2 = isBalanced(root.right);

  if (flag1 && flag2) {
    var leftHeight = getHeight(root.left);
    var rightHeight = getHeight(root.right);

    var diff = Math.abs(leftHeight - rightHeight);

    if (diff > 1) return false;
    else return true;
  }
}

function getHeight(root) {
  if (!root) return 0;
  else {
    var leftHeight = getHeight(root.left);
    var rightHeight = getHeight(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }
}

var answer = isBalanced(one);
console.log(answer);