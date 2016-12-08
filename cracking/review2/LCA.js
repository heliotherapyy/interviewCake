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
var six2 = new Node(6);
var seven = new Node(7);
var eight = new Node(8);
var nine = new Node(9);
var ten = new Node(10);

five.left = two;
five.right = eight;
two.left = one;
two.right = three;
eight.left = six;
eight.right = nine;
three.right = four;
six.right = seven;
nine.right = ten;

/*
          5
      2        8
    1  3     6   9
        4     7     10
*/

function leastCommonAncestor(root, node1, node2) {
  // error check
  if (!root) return null;

  // base case
  if (root.value === node1.value || root.value === node2.value) return root;

  var left = leastCommonAncestor(root.left, node1, node2);
  var right = leastCommonAncestor(root.right, node1, node2);

  if (left && right) return root;
  else {
    if (left) return left;
    else if (right) return right;
    else return null;
  }

}

var found = leastCommonAncestor(five, one, four);
console.log(found);