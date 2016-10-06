/*
  x 값을 갖는 노드를 기준으로 연결 리스트를 나누는 코드를 작성하라
  x 보다 작은 값을 갖는 노드가 x 와 같거나 더 큰 값을 갖는 노드들보다
  앞 쪽에 오도록 하면 된다
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var A = new Node(1);
var B = new Node(2);
var C = new Node(10);
var D = new Node(8);
var E = new Node(5);

// 1 -> 10 -> 5 -> 2 -> 8
A.next = C;
C.next = E;
E.next = B;
B.next = D;

// O(N)
let connectNodes = (array, flag) => {
  let lastNode;
  let firstNode;

  for (let i = 0 ; i < array.length - 1 ; i++) {
    array[i].next = array[i+1];
  }

  if (flag === "last") {
    lastNode = array[array.length - 1];
    return lastNode;
  } else if (flag === "first") {
    firstNode = array[0];
    return firstNode;
  } else {
    console.error("Invalid input");
  }
}

// O(N)
let organizeNodes = (head, target) => {
  var smallers = [];
  var greaters = [];
  var middle;

  var traverse = head;

  while (traverse) {
    if (traverse.data < target) {
      smallers.push(traverse);
    } else if (traverse.data > target) {
      greaters.push(traverse);
    } else {
      middle = traverse;
    }

    traverse = traverse.next;
  }

  var lastOfSmallers = connectNodes(smallers, "last");
  lastOfSmallers.next = middle;
  middle.next = connectNodes(greaters, "first");

}

organizeNodes(A, 5);