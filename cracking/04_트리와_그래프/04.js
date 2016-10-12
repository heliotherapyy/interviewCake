/*
  04
  주어진 이진 트리에서 깊이별로 연결 리스트를 만들어 내는 알고리즘을 작성하라
  트리의 깊이가 D라면, 알고리즘 수행 결과로 D개의 연결 리스트가 만들어져야 한다
*/

// 09.03

var BinaryTree = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var A = new BinaryTree('A');
A.left = new BinaryTree('B');
var B = A.left;
A.right = new BinaryTree('C');
var C = A.right;

B.left = new BinaryTree('D');
var D = B.left;
B.right = new BinaryTree('E');
C.left = new BinaryTree('F');
C.right = new BinaryTree('G');

D.left = new BinaryTree('H');
D.left.left = new BinaryTree('J');


// using BFS -> Queue!
var Node = function (data) {
  this.data = data;
  this.next = null;
}

var Queue = function (data) {

  var head;
  var tail;

  this.enqueue = function(data) {
    if (!data) {
      return null;
    }

    var node = new Node(data);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  }

  this.dequeue = function() {
    if (!head) {
      console.error("Empty Queue");
      return;
    }

    var result = head.data;
    head = head.next;

    return result;
  }

  this.isEmpty = function() {
    if (!head) {
      return true;
    }

    return false;
  }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);

var BFS = function (root) {
  if (!root) {
    return null;
  }

  var queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    var visited = queue.dequeue();
    console.log(visited.data);

    if (visited.left) {
      queue.enqueue(visited.left);
    }

    if (visited.right) {
      queue.enqueue(visited.right);
    }
  }
}

BFS(A);

var connectNodes = function(root) {

  if (!root) {
    console.error("invalid input");
    return null;
  }

  // store linked lists
  var result = [];



  return result;
}




























