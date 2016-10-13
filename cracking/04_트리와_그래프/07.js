/*
  이진 트리 내의 두 노드의 공통 선조 노드를 찾는 알고리즘을 설계하고 구현하라
  자료구조 내에 부가적인 노드를 저장해 두는 일은 금한다
  주의: 이진 탐색 트리가 아닐 수도 있다
*/

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

// 0903
/*
  BFS 로 가면서 특정 노드가 맞다고 하면,
  그 특정 노드의 자식들을 큐에 포함시킨다
  그리고 다시 반복
*/

function covers(root, target) {
  if (!root) return false;
  if (root === target) {
    return true;
  } else {
    return covers(root.left, target) || covers(root.right, target);
  }
}



function commonAncestorHelper(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;
  let is_p_on_left = covers(root.left, p);
  let is_q_on_left = covers(root.left, q);

  if (is_p_on_left !== is_q_on_left) {
    return root;
  }

  let whichSide = is_p_on_left ? root.left : root.right;
  return commonAncestorHelper(whichSide, p, q);
}

var commonAncestor = function (root, p, q) {
  if (!covers(root, p) || !covers(root, q)) {
    return null;
  }

  return commonAncestorHelper(root, p, q);
}

console.log(commonAncestor(D,F) === A);
console.log(commonAncestor(D,E) === B);
console.log(commonAncestor(B,G) === A);