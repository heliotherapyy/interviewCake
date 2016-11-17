/*
  최대한 High-Level로 먼저 작성하기
      1
     / \
    2   3
   / \
  4   5
   \
     7
*/

var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

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
four.right = seven;

var levelOrderBottom = function(root) {
    var result = [[root]];
    var prevs = [root];

    while (true) {
        var current = [];
        while (prevs.length) {
            var parent = prevs[0];
            prevs = prevs.slice(1);
            addChild(current, parent);
        }
        if (current.length === 0) return result.reverse();
        result.push(current);
        prevs = current;
    }
};

function addChild(current, parent) {
  if (parent.left) current.push(parent.left);
  if (parent.right) current.push(parent.right);
}



var result = levelOrderBottom(one);
console.log(result);