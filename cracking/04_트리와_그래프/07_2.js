function commonAncestor(root, node1, node2) {
  if (!root || !node1 || !node2) {
    return false;
  }

  var valids = [];
  valids.push(root);

  while (valids.length !== 0) {
    var popped = valids[0];
    valids = valids.slice(1);

    if (popped.left) {
      if (BFS_Search(popped.left, node1, node2)) {
        valids.push(popped.left);
      }
    }

    if (popped.right) {
      if (BFS_Search(popped.right, node1, node2)) {
        valids.push(popped.right);
      }
    }

  }

  console.log(popped);
  return popped;
}

function BFS_Search(root, node1, node2) {
  var queue = [];
  queue.push(root);

  var node1_exist = false;
  var node2_exist = false;

  while (queue.length !== 0) {
    var popped = queue[0];
    queue = queue.slice(1);

    if (popped.left) {
      if (isEqualTo(popped.left, node1)) {
        node1_exist = true;
      } else if (isEqualTo(popped.left, node2)) {
        node2_exist = true;
      }
      queue.push(popped.left);
    }

    if (popped.right) {
      if (isEqualTo(popped.right, node1)) {
        node2_exist = true;
      } else if (isEqualTo(popped.right, node2)) {
        node2_exist = true;
      }
      queue.push(popped.right);
    }

    if (node1_exist && node2_exist) {
      return true;
    }
  }
  return false;
}

function isEqualTo(from, to) {
  return from.data === to.data;
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

commonAncestor(A, D.left, B);