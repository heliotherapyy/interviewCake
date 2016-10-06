/*
  06
  정순회 기준으로 이진 탐색 트리 내의 한 노드가 주어지면
  그 노드의 '다음' 노드를 찾아내는 알고리즘을 작성하라
  각 노드에는 부모 노드를 가리키는 링크가 존재한다고 가정한다
*/

// helper function
var findLeftMost = function (root) {

  var traverse = root;

  while (traverse) {
    if (traverse.left) {
      traverse = traverse.left;
    } else {
      return traverse;
    }
  }
}

var findNext = function (root) {
  if (!root) {
    return null;
  }

  let traverse;

  if (root.right) {
    return findLeftMost(root.right);
  } else {
    while (root === root.parent.right) {
      traverse = root.parent;
      root = traverse;
    }

    return traverse.parent;
  }

}