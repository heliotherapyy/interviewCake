/*
  정순회 기준으로 이진 탐색 트리 내의 한 노드가 주어지면 그 노드의 다음 노드를 찾아내는 알고리즘을 작성하라
  각 노드에는 부모 노드를 가리키는 링크가 존재한다고 가정한다
*/

function findNextNode(node) {
  if (!node) {
    return null;
  }

  if (node.right) {
    return findVeryLeftLeaf(node.right);
  } else {
    /*
      2 cases: node is parent's right child
               node is parent's left child
      how do i know that? compare the value of node and its parent
    */

    while (isRightChild(node)) {
      node = node.parent;
    }

    return node.parent;
  }

}

function isRightChild(node) {
  return node.data > node.parent.data;
}

function findVeryLeftLeaf(node) {
  if (!node) {
    return null;
  }

  var pointer = node;
  while (pointer.left) {
    pointer = pointer.left;
  }

  return pointer;
}