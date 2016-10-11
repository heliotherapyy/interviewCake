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
/*
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
*/

// Node, number -> Node
function main(root, pivot) {
  var left_root, left_end, right_root, right_end, same_root, same_end;

  var traverse = root;
  while (traverse) {
    if (traverse.value < pivot) {
      if (!left_root) {
        left_root = left_end = traverse;
      } else {
        left_end.next = traverse;
        left_end = left_end.next;
      }
    } else if (traverse.value > pivot) {
      if (!right_root) {
        right_root = traverse;
        right_end = traverse;
      } else {
        right_end.next = traverse;
        right_end = right_end.next;
      }
    } else {
      if (!same_root) {
        same_root = same_end = traverse;
      } else {
        same_end.next = traverse;
        same_end = same_end.next;
      }
    }
    traverse = traverse.next;
  }

  left_end.next = same_root;
  same_end.next = right_root;
  right_end.next = null;

  console.log(left_root);
}

debugger; main(A, 5);