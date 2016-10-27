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

function findAllRoutes(root, result, prevs) {
  prevs = prevs.slice();
  prevs.push(root.value);
  result.push(prevs);
  result.push([root.value]);

  if (root.left) findAllRoutes(root.left, result, prevs);
  if (root.right) findAllRoutes(root.right, result, prevs);

  return result;
}

var result = [];
debugger; var result = findAllRoutes(root, result, []);
console.log(result);
