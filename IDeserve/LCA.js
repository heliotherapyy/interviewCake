/* Settings */
var Node = function(value) {
  this.value = value;
  this.left = this.right = null;
}

var zero = new Node(0);
var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var six = new Node(6);
var seven = new Node(7);
var eight = new Node(8);

one.left = two;
one.right = three;

two.left = four;
two.right = five;

three.right = seven;

four.left = six;

seven.left = eight;

/*
      1
    2   3
  4  5    7
 6       8
*/

// main(one, six, five) === two;

var leastCommonAncestor = function(root, a, b) {
  if (!root) return null;
  if (root.value === a.value || root.value === b.value) {
    return root;
  }

  var left = leastCommonAncestor(root.left, a, b);
  var right = leastCommonAncestor(root.right, a, b);

  if (!left && !right) return null;
  if (!left && right) return right;
  if (left && !right) return left;
  if (left && right) return root;
}

debugger; var result = leastCommonAncestor(one, six, eight);
console.log(result);





















