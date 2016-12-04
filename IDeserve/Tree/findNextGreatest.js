var Node = function(value) {
  this.value = value;
  this.parent = null;
  this.left = this.right = null;
}

/*
          5
      2        8
    1  3     6   9
  0     4     7     10
*/

var zero = new Node(0);
var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var six = new Node(6);
var seven = new Node(7);
var eight = new Node(8);
var nine = new Node(9);
var ten = new Node(10);

five.left = two;
five.right = eight;

two.left = one;
two.right = three;
two.parent = five;

eight.left = six;
eight.right = nine;
eight.parent = five;

three.right = four;
one.left = zero;

one.parent = three.parent = two;

six.right = seven;
nine.right = ten;

six.parent = nine.parent = eight;

zero.parent = one;
four.parent = three;
seven.parent = six;
ten.parent = nine;
console.log(findNextGreatest(four));

function findNextGreatest(node) {
  if (!node) return null;

  if (node.right) {
    return getSmallest(node.right);
  } else {
    return getAncestor(node);
  }
}

function getAncestor(node) {
  var parent = node.parent;
  while (parent.right.value === node.value) {
    node = parent;
    parent = node.parent;
  }
  return parent;
}

// boundary check
function getSmallest(node) {
  while (node && node.left) {
    node = node.left;
  }

  return node;
}