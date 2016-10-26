/*
  x 값을 갖는 노드를 기준으로 연결 리스트를 나누는 코드를 작성하라
  x 보다 작은 값을 갖는 노드가 x 와 같거나 더 큰 값을 갖는 노드들보다
  앞 쪽에 오도록 하면 된다
*/

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

var A = new Node(10);
var B = new Node(2);
var C = new Node(1);
var D = new Node(8);
var E = new Node(5);

// 1 -> 2 -> 5 -> 8 -> 10
A.next = B;
B.next = C;
C.next = D;
D.next = E;

/* Notes

Questions:
1. Are the values stored in each node unique? - NO
2. Does it have to be sorted? - NO

Input: head of node, pivot node
Output: head

Example:

5->3->4->10->7, 7
=> 5->3->4->7->10

Approach:
Node smalls, bigs
smalls =  connect(smalls, 3) / 3
smalls = connect(smalls, 4) / 4

bigs = connect(bigs, 10); // 10

connect all three LLs


"O(1) every time we push smallers values to smalls"

*/

/* Debugging

5->3->4->10->7, 7
=> 5->3->4->7->10

smallsHead: 4
bigsHead: 10
equalsHead: 7
runner: null;

*/

function divideLL(head, pivot) {
  var smallsHead, bigsHead, equalsHead;

  var runner = head;

  // O(N)
  while (runner) {
    if (runner.value < pivot.value) {
      smallsHead = connect(smallsHead, runner);
    } else if (runner.value > pivot.value) {
      bigsHead = connect(bigsHead, runner);
    } else {
      equalsHead = connect(equalsHead, runner);
    }
    runner = runner.next;
  }

  var smallsTail = findTail(smallsHead);
  var equalsTail = findTail(equalsHead);
  smallsTail.next = equalsHead;
  equalsTail.next = bigsHead;

  return smallsHead;
}

// O(1)
function connect(head, node) {
  if (!head) {
    head = new Node(node.value);
  } else {
    var newNode = new Node(node.value);
    newNode.next = head;
    head = newNode;
  }
  return head;
}

// O(N)
function findTail(head) {
  while (head.next) {
    head = head.next;
  }

  return head;
}

var answer = divideLL(A, A);
