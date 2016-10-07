function containsCycle(node) {
  if (!node || !node.next) {
    return false;
  }

  var first = node;
  var second = node;

  while (second) {
    first = first.next;
    second = second.next.next;

    if (first === second) {
      return true;
    }
  }

  return false;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = b;

var answer = containsCycle(a);
console.log(answer);