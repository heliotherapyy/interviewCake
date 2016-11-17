/*
  05
  어떤 이진 트리가 이진 탐색 트리인지 판별하는 함수를 구현하라
*/

var Node = function(data) {
  this.data = data;
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

function isBST(root) {
  if (!root) {
    return true;
  }

  var left = isBST(root.left);
  if (left === -1) {
    return -1;
  }

  var right = isBST(root.right);
  if (right === -1) {
    return -1;
  }

  var leftFlag, rightFlag;

  if (root.left) {
    leftFlag = root.left.value < root.value;
    if (!leftFlag) {
      return -1;
    }
    if (root.left.right) {
      leftFlag = (root.left.right.value < root.value);
      if (!leftFlag) {
        return -1;
      }
    }
  }

  if (root.right) {
    rightFlag = root.right.value > root.value;
    if (!rightFlag) {
      return -1;
    }
    if (root.right.left) {
      rightFlag = (root.right.left.value > root.value);
      if (!rightFlag) {
        return -1;
      }
    }
  }

  return true;
}

function final(root) {
  if (isBST(root) === -1) {
    return false;
  } else {
    return true;
  }
}

debugger; var answer = final(root);
console.log(answer);
