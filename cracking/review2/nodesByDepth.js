function nodesByDepth (root) {
  var result = [[root.value]];
  var queue = [];
  queue.push(root);

  while (true) {
    var children = [];
    while (queue.length) {
      var parent = queue[0];
      queue = queue.slice(1);

      if (parent.left) children.push(parent.left);
      if (parent.right) children.push(parent.right);
    }
    if (!children.length) return print(result);
    update(result, children);
    queue = children;
  }
}

function update(result, children) {
  var values = [];
  for (var i = 0; i < children.length; i++) {
    values.push(children[i].value);
  }
  result.push(values);
}

function print(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("Depth " + i + " : " + arr[i]);
  }
}

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
three.right = four
six1.right = seven;
nine.right = ten;

nodesByDepth(five);