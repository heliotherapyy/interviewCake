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

var inOrder = function(root, result) {
  if (!root) return null;

  inOrder(root.left, result);
  result.push(new Node(root.value));
  inOrder(root.right, result);

  return result;
}

var convert = function(root) {
  var nodes = inOrder(root, []);
  nodes.sort(function (a, b) {
    if (a.value < b.value) return -1;
    else return 1;
  });

  var result = helper(root, nodes);
  return result;
}

var helper = function(root, nodes) {
  if (!root || !nodes.length) return null;

  root.left = helper(root.left, nodes);
  var shifted = nodes.shift();
  root.value = shifted.value;
  root.right = helper(root.right, nodes);

  return root;
}

debugger; var result = convert(one);
console.log(result);






