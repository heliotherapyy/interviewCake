var Node = function(value) {
  this.value = value;
  this.left = this.right = null;
}

var createBST = function(arr, start, end) {
  if (!arr || !arr.length) return null;

  if (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = arr[mid];

    var root = new Node(middle);

    root.left = createBST(arr, start, mid - 1);
    root.right = createBST(arr, mid + 1, end);
  }

  return root;
}

var input = [1,2,3,4,5,6,7,8,9,10];
var root = createBST(input, 0, input.length - 1);


/*
          5
      2        8
    1  3     6   9
        6     7     10
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
eight.left = six2;
eight.right = nine;
three.right = six1;
six1.right = seven;
nine.right = ten;

function isBST(root) {
  if (!root) {
    return true;
  }

  var left = isBST(root.left);
  if (left === -1) {
    return -1;
  }

  var right = isBST(root.right);
  if (right === -1) {
    return -1;
  }

  var leftFlag, rightFlag;

  if (root.left) {
    leftFlag = root.left.value < root.value;
    if (!leftFlag) {
      return -1;
    }
    if (root.left.right) {
      leftFlag = (root.left.right.value < root.value);
      if (!leftFlag) {
        return -1;
      }
    }
  }

  if (root.right) {
    rightFlag = root.right.value > root.value;
    if (!rightFlag) {
      return -1;
    }
    if (root.right.left) {
      rightFlag = (root.right.left.value > root.value);
      if (!rightFlag) {
        return -1;
      }
    }
  }

  return true;
}

function final(root) {
  if (isBST(root) === -1) {
    return false;
  } else {
    return true;
  }
}

debugger; var answer = final(five);
console.log(answer);
