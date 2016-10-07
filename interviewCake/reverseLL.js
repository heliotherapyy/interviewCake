function reverseLL(node) {


  var next = node;
  var prev = null;

  while (next) {
    next = node.next;
    node.next = prev;
    prev= node;
    if (next) node = next;
  }

  return node;
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

var new_root = reverseLL(a);
console.log(new_root);