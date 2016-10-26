/*LCA problem with no parent pointers. Given the root of a tree and pointers to two nodes contained in that tree, return the lowest common ancestor of the two nodes. IE, the common ancestor furthest from the root. */

/* Notes

Questions:
1. Is the tree Binary Search Tree? - NO
2. Are the nodes' values unique? - YES


Input: root, node1, node2
Output: node

Approach:
BFS search
Check nodes by depth
  and if any of node's child covers both node1, node2 -> search its inner childs again.

*/

/* Debugging

*/


/*
            10
      -5-          15
    3      "6'   70  60
     "4"

queue:
popped: 5
left: 3
right:  6
*/

function findCommonAncestor(root, node1, node2) {
  // error check
  if (!root) return false;

  var lastAncstor = null;
  var queue = new Queue();

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    var popped = queue.dequeue();
    var left = popped.left;
    var right = popped.right;

    if (left && covers(left, node1, node2)) queue.enqueue(left);
    if (right && covers(right, node1, node2)) queue.enqueue(right);
  }

  return popped;
}

function covers(root, node1, node2) {
  if (!root) return false;

  var flag1, flag2;
  flag1 = flag2 = false;

  var queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    var popped = queue.dequeue();
    var left = popped.left;
    var right = popped.right;

    if (left) {
      if (left.value === node1.value) flag1 = true;
      else if (left.value === node2.value) flag2 = true;
      queue.enqueue(left);
    }

    if (right) {
      if (right.value === node1.value) flag1 = true;
      else if (right.value === node2.value) flag2 = true;
      queue.enqueue(right);
    }

    if (flag1 && flag2) {
      return true;
    }
  }
  return false;
}

/*
            10
      -5-          15
    3      "6"   70  60
     "4"

2nd depth
root: 5


*/

function covers(root, node1, node2) {
  if (!root) return false;

  return coversOneNode(root, node1) && coversOneNode(root, node2);
}

function coversOneNode(root, target) {
  if (!root) return false;
  else if (root.value === target.value) return true;
  else {
    return coversOneNode(root.left, target) || coversOneNode(root.right, target);
  }
}

var BinaryTree = function(data) {
  this.value = data;
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

covers(A, D.left, B.right);

