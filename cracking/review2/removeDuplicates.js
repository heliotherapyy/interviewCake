var Node = function(data) {
  this.value = data;
  this.next = null;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');
var E2 = new Node('E');
var C2 = new Node('C');
var C3 = new Node('C');

A.next = B;
B.next = C;
C.next = D;
D.next = E;
E.next = E2;
E2.next = C2;
C2.next = C3;

var removeDups = function(root) {
  var cache = {};
  var origin = root;
  var prev = root;

  while (root) {
    if (cache[root.value]) {
      while (root && cache[root.value]) root = root.next;
      prev.next = root;
      prev = prev.next;
    } else {
      cache[root.value] = true;
      root = root.next;
      if (root.next && !cache[root.next.value]) prev = root;
    }
  }

  return origin;
}

var start = removeDups(A);
console.log(start);