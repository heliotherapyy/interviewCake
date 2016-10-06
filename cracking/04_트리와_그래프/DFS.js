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

// in-order traversal
function inOrder(node) {
  if (!node) {
    return null;
  }

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

inOrder(root);

