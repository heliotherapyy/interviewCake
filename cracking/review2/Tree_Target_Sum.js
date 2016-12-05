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

function findPath(root, n, path, result) {
  if (!root) return;

  // Pre-order
  path = path.slice();
  path.push(root.value);

  var sum = 0;
  for (var i = path.length - 1; i >= 0; i--) {
    sum += path[i];
    if (sum === n) {
      var newPath = [];
      for (var j = i; j < path.length; j++) {
        newPath.push(path[j]);
      }
      result.push(newPath);
    }
  }

  findPath(root.left, n, path, result);
  findPath(root.right, n, path, result);

  return result;
}

debugger; var result = findPath(one, 7, [], []);
console.log(result);