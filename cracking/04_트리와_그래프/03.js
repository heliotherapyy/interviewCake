/*
오름차순으로 정렬된 배열로부터 그 높이가 가장 낮은 이진 탐색 트리를 생성하는 알고리즘을 작성하라.
배열 내 모든 원소는 배열 내에서 유일한 값을 갖는다.
*/

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function createBST(array, start, end) {
  
  if (start <= end) {
    var midIdx = Math.floor((start + end) / 2);
  var middle = array[midIdx]; 

    var root = new Node(middle);
  root.left = createBST(array, start, midIdx - 1);
    root.right = createBST(array, midIdx + 1, end);

  return root;
}
}

var array = [1,2,3,4,5,6,7,8,9];
var root = createBST(array, 0, array.length - 1);

