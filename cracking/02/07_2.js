function palindrome(head) {
  var stack = [];
  var length = countNodes(head);
  var ptr = updateStack(head, length, stack);

  return doesMatch(stack, ptr);

}

function updateStack(head, length, stack) {
  if (length % 2 === 0) {
    for (var i = 0; i < length / 2; i++) {
      stack.push(head.data);
      head = head.next;
    }
  } else {
    for (var i = 0; i < Math.ceil(length / 2); i++) {
      if (i !== Math.ceil(length / 2) - 1) {
        stack.push(head.data);
      }
      head = head.next;
    }
  }

  return head;
}

function doesMatch(stack, ptr) {
  while (ptr) {
    var popped = stack.pop();
    if (popped !== ptr.data) return false;
    ptr = ptr.next;
  }
  return true;
}

function countNodes(head) {
  if (!head) return 0;

  var count = 1;
  while (head.next) {
    count++;
    head = head.next;
  }
  return count;
}

function Node(value) {
  this.data = value;
  this.next = null;
}

var A = new Node('a');
var B = new Node('b');
var C = new Node('c');
var D = new Node('b');
var E = new Node('a');

A.next = B;
B.next = C;
C.next = D;
D.next = E;

var num = countNodes(A);
console.log(num);

debugger; var answer = palindrome(A);
console.log(answer);