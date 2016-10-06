/*
  01
  비정렬 연결 리스트에서 중복 문자를 제거하는 코드를 작성하라
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
var E2 = new Node('E');
var C2 = new Node('C');
var C3 = new Node('C');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = E2;
E2.next = C2;
C2.next = C3;

// O(N)
var removeDuplicates = (head) => {
  var traverse = head;
  var prev;
  var cache = {};

  while (traverse) {
    if (!cache[traverse.data]) {
      cache[traverse.data] = true;
    } else {
      prev.next = traverse.next;
      traverse = traverse.next;
      continue;
    }
    prev = traverse;
    traverse = traverse.next;
  }

  return head;

}
