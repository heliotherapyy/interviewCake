var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var root = new Node(20);
var root_left = root.left = new Node(10);
var root_right = root.right = new Node(30);

root_leftLeft = root_left.left = new Node(5);
root_leftRight = root_left.right = new Node(35);
root_rightLeft = root_right.left = new Node(25);
root_rightRight = root_right.right = new Node(40);



function isBinarySearchTree(root) {
  // error checking
  if (!root) {
    return true;
  }

  var left_flag = isBinarySearchTree(root.left);
  if (left_flag === -1) {
    return false;
  }

  var right_flag = isBinarySearchTree(root.right);
  if (right_flag === -1) {
    return false;
  }

  // now checking root
  if (root.left) {
    left_flag = root.data > root.left.data;
    if (!left_flag) {
      return -1;
    }
    if (root.left.right) {
      left_flag = root.data > root.left.right.data;
      if (!left_flag) {
        return -1;
      }
    }
  }

  if (root.right) {
    right_flag = root.data < root.right.data;
    if (!right_flag) {
      return -1;
    }
    if (root.right.left) {
      right_flag = root.data < root.right.left.data;
      if (!right_flag) {
        return -1;
      }
    }
  }
  return true;
}

function main(root) {
  if (isBinarySearchTree(root) === -1) {
    return false;
  } else {
    return true;
  }
}

debugger; var answer = main(root);
console.log(answer);
