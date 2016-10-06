/*
  02
  단방향 연결 리스트에서 뒤에서 k번째 원소를 찾는 알고리즘을 구현하라라
*/

// 09.02.16

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

// moving the second pointer a given number of steps ahead of first
var moveSecond = (pointer, steps) => {
  var secondPointer = pointer;
  for (let i = 0 ; i < steps; i++) {
    secondPointer = secondPointer.next;
  }
  return secondPointer;
}

// O(N)
var findFromBehind = (head, number) => {
  var first = head;
  var second = moveSecond(first, number);

  while (first) {
    if (second.next) {
      first = first.next;
      second = second.next;
    } else {
      return first;
    }
  }

  console.error("You have inserted a number that is more than # of nodes");
}

findFromBehind(A, 2);