function nodesByDepth(root) {
  if (!root) return null;
  var prevs = [root];
  var current = [];
  var result = [[root]];

  while (true) {
    for (var i = 0; i < prevs.length; i++) {
      var prev = prevs[i];
      current = extractChilds(prev, current);
    }

    if (current.length !== 0) {
      result.push(current);
      prevs = current;
      current = [];
    } else {
      break;
    }
  }
  // result = connect(result);
  console.log(result);
}

function extractChilds(node, arr) {
  if (node.left) arr.push(node.left);
  if (node.right) arr.push(node.right);
  return arr;
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

nodesByDepth(A);