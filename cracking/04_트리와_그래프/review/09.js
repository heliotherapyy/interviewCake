function findPath(root, target, paths, result) {
  if (!root) return null;
  if (!paths) var paths = [root.data];
  else {
    paths = paths.slice();
    paths.push(root.data);
  }

  if (!result) var result = [];

  update(paths, target, result);

  findPath(root.left, target, paths, result);
  findPath(root.right, target, paths, result);

  return result;
}

function update(paths, target, result) {
  var sum = 0;
  for (var i = paths.length - 1; i >= 0; i--) {
    sum += paths[i];
    if (sum === target) {
      var path = findSubArray(paths, i);
      result.push(path);
    }
  }
}

function findSubArray(paths, index) {
  var result = [];

  for (var i = paths.length - 1; i >= index; i--) {
    result.push(paths[i]);
  }

  return result;
}


var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

/*
          1
        /  \
      2     3
    /  \     \
  4     5     7
*/

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var seven = new Node(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = four;
four.right = seven;

debugger; var answer = findPath(one, 7);
console.log(answer);