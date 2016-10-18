function isBalanced(root) {
  if (!root) {
    return true;
  }

  var flag1 = isBalanced(root.left);
  if (flag1 === -1) {
    return -1;
  }

  var flag2 = isBalanced(root.right);
  if (flag2 === -1) {
    return -1;
  }

  if (flag1 && flag2) {
    flag1 = findHeight(root.left);
    flag2 = findHeight(root.right);
    var diff = Math.abs(flag1 - flag2);
    if (diff > 1) {
      return -1;
    } else {
      return true;
    }
  }
}

function findHeight(root) {
  if (!root) {
    return 0;
  } else {
    return 1 + Math.max(findHeight(root.left), findHeight(root.right));
  }
}

function main(root) {
  if (!root) {
    return true;
  }

  if (isBalanced(root) === -1) {
    return false;
  } else {
    return true;
  }
}

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

var answer = main(root);
console.log(answer);
