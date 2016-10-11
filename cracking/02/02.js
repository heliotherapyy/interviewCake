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

/*
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
*/

/*
  October 11th
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

// O(N)
function deleteFromBack(root, k) {
  if (!root) {
    return null;
  }

  var runner1 = root;
  var runner2 = root;

  // make runner2 (k) steps ahead of runner1
  runner2 = moveRunner(runner2, k);

  // runner2 reaches the end
  while (runner2.next) {
    runner1 = runner1.next;
    runner2 = runner2.next;
  }

  var prev = runner1;
  var target = runner1.next;
  var next = null;
  if (target.next) {
    next = target.next;
  }


  if (next) {
    prev.next = next;
  } else {
    prev.next = null;
  }

  console.log(root);
}

function moveRunner(node, num) {
  var i = 0;
  while (i < num) {
    node = node.next;
    i++;
  }
  return node;
}

deleteFromBack(A, 1);