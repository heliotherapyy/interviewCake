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

function makeLinkedLists(root) {
  var result = [];
  var prev = [];
  var current = [];

  prev.push(root);

  while (prev.length !== 0) {
    current = [];

    for (var i = 0; i < prev.length; i++) {
      var node = prev[i];
      if (node.left) {
        current.push(node.left);
      }

      if (node.right) {
        current.push(node.right);
      }
    }
    result.push(prev);
    prev = current;
  }

  console.log(result);

}

makeLinkedLists(A);