var Node = function(value) {
  this.value = value;
  this.left = this.right = null;
}


/*
          5
      2        8
    1  3     6   9
        4     7     10
*/

var zero = new Node(0);

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var six1 = new Node(6);
var six2 = new Node(6);
var seven = new Node(7);
var eight = new Node(8);
var nine = new Node(9);
var ten = new Node(10);

five.left = two;
five.right = eight;
two.left = one;
two.right = three;
eight.left = six1;
eight.right = nine;
three.right = six1;
six1.right = seven;
nine.right = ten;

function isBST(root) {
  if (!root) return true;

  var left = isBST(root.left);
  var right = isBST(root.right);

  if (left && right) {
    var leftGrandChild = (root.left) ? root.left.right : null;
    var rightGrandChild = (root.right) ? root.right.left : null;

    while (leftGrandChild) {
      if (leftGrandChild.value > root.value) return false;
      leftGrandChild = leftGrandChild.right
    }

    while (rightGrandChild) {
      if (rightGrandChild.value < root.value) return false;
      rightGrandChild = rightGrandChild.left;
    }

    return true;
  }
}

var output = isBST(five);
console.log(output);

function optimized(root, min, max) {
  if (!root) return true;

  // preorder
  // 훨씬 깔끔하네 스벌

  if (min && min >= root.value || max && max < root.value) return false;

  if (!optimized(root.left, min, root.value) || !optimized(root.right, root.value, max)) return false;

  return true;
}

console.log(optimized(five));