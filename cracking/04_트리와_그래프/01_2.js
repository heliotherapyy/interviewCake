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

/*
  October 12th
*/
function isBalanced(root) {
  var left_height = 0;
  var right_height = 0;

  if (!root) {
    return true;
  }

  if (!root.left && !root.right) {
    return true;
  }

  if (root.left) {
    left_height = getHeight(root.left);
  }

  if (root.right) {
    right_height = getHeight(root.right);
  }

  if (Math.abs(left_height - right_height) > 1) {
    return false;
  } else {
    var left, right;
    if (root.left) {
      left = isBalanced(root.left);
    }

    if (root.right) {
      right = isBalanced(root.right);
    }

    return left && right;
  }
}

function getHeight(root) {
  if (!root) {
    return 0;
  }
  var left_height = 0;
  var right_height = 0;

  if (root.left) {
    left_height = 1 + getHeight(root.left);
  }

  if (root.right) {
    right_height = 1 + getHeight(root.right);
  }

  return 1 + Math.max(left_height, right_height);
}

function main(root) {
  var left = isBalanced(root.left);
  if (!left) {
    return false;
  }
  var right = isBalanced(root.right);
  if (!right) {
    console.log("something");
    return false;
  }

  return true;
}

debugger; var answer = main(root);
console.log(answer);