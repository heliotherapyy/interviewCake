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
var nine = new Node(9);

zero.left = one;
zero.right = two;

one.left = four;
one.right = five;

two.left = three;
two.right = six;

five.left = seven;
five.right = eight;

six.left = nine;

var Stack = function() {
  this.storage = [];
}

Stack.prototype.push = function(value) {
  this.storage.push(value);
}

Stack.prototype.pop = function() {
  return this.storage.pop();
}

Stack.prototype.peak = function() {
  var length = this.storage.length;
  return this.storage[length - 1];
}

Stack.prototype.isEmpty = function() {
  return this.storage.length === 0;
}


var spiralPrint = function(root) {
  var oddStack = new Stack();
  var evenStack = new Stack();

  evenStack.push(root);

  var result = [];
  var isEven = true;

  while (!oddStack.isEmpty() || !evenStack.isEmpty()) {
    var stack = (isEven) ? evenStack : oddStack;

    while (!stack.isEmpty()) {
      var popped = stack.pop();

      if (isEven) {
        (popped.right) ? oddStack.push(popped.right) : null;
        (popped.left) ? oddStack.push(popped.left) : null;
      } else {
        (popped.left) ? evenStack.push(popped.left) : null;
        (popped.right) ? evenStack.push(popped.right) : null;
      }

      result.push(popped.value);
    }

    isEven = !isEven;
  }

  return result;
}

var result = spiralPrint(zero);
console.log(result);

var BFS = function(root) {
  var result = [];
  var queue = [root];

  while (queue.length) {

    var popped = queue[0];
    queue = queue.slice(1);

    result.push(popped.value);

    (popped.left) ? queue.push(popped.left) : null;
    (popped.right) ? queue.push(popped.right) : null;
  }

  return result;
}

// var result = BFS(zero);
// console.log(result);

var printByDepth = function(root) {
  var result = [[root]];
  var prevs = [root];

  while (true) {
    var current = [];

    while (prevs.length) {
      var popped = prevs[0];
      prevs = prevs.slice(1);

      (popped.left) ? current.push(popped.left) : null;
      (popped.right) ? current.push(popped.right) : null;
    }

    if (!current.length) return result;

    // update result
    result.push(current);

    prevs = current;

  }
}

// var result = printByDepth(zero);
// console.log(result);


