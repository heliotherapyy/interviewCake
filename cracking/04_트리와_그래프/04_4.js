function Node(value) {
	this.data = value;
	this.next = null;
}

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


function nodesByDepth(root) {
// error checking
if (!root) {
	return null;
}

var result = [];
	var prevs = [root];
	var current = [];
	var head;
	var tail;
	
	while (prevs.length) {
for (var i = 0; i < prevs.length; i++) {
			var node = prevs[i];
			if (!tail) head = tail = new Node(node.data);
			else {
	tail.next = new Node(node.data);
	tail = tail.next;
}

			if (node.left) current.push(node.left);
			if (node.right) current.push(node.right);
}
result.push(head);
prevs = current;
current = [];
head = tail = null;
}

return result;
}

var array = nodesByDepth(A);