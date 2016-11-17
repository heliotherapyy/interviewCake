function findKthSmallest(root, k) {
  if (!root) return null;
  var result = inorder(root);
  return result[k - 1];
}


function inorder(root, result) {
  if (!root) return null;
  if (!result) result = [];


  inorder(root.left, result);
  result.push(root.data);
  inorder(root.right, result);

  return result;
}


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


findKthSmallest(root, 2);
