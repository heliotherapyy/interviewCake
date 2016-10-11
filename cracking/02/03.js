/*
  03
  단방향 연결 리스트의 중간에 있는 노드 하나를 삭제하는 알고리즘을 구현하라.
  삭제할 노드에 대한 접근만 가능하다는 것에 유의하라

*/

var Node = function(data) {
  this.data = data;
  this.next = null;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');

A.next = B;
B.next = C;
C.next = D;
D.next = E;

/*
// 09.02.16
var removeNodeWrong = (head, target) => {
  let traverse = head;
  let prev;

  // Note that we only remove nodes in middle
  while (traverse) {
    if (traverse.data === target) {
      prev.next = traverse.next;
      break;
    }

    prev = traverse;
    traverse = traverse.next;
  }

  if (!traverse) {
    console.error("Not Found");
  }
}

var removeNodeRight = (target) => {
  var node = target.next;
  target.data = node.data;
  target.next = node.next;
}
*/

/*
  October 11th
*/

function deleteTarget(target) {
  while (target) {
    var next = target.next;
    if (!next) {
      target = null;
      return;
    } else {
      target.data = next.data;
      target.next = next.next;
      target = target.next;
    }
  }
}

deleteTarget(C);
console.log(A);