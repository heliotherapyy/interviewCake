function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

var tree = new BinaryTreeNode(10);
var left_child = tree.insertLeft(50);
var right_child = tree.insertRight(150);
right_child.insertRight(200);

var left_left_child = left_child.insertLeft(25);
left_left_child.insertLeft(10);

function findHeight(node) {
  if (!node) {
    return 0;
  }

  var leftHeight = findHeight(node.left);
  var rightHeight = findHeight(node.right);

  var maxHeight = Math.max(leftHeight, rightHeight);

  return maxHeight + 1;
}

function fetchHeight(node, storage) {
  if (!storage[node.value]) {
    var data = findHeight(node);
    storage[node.value] = data;
  } else {
    return storage[node.value];
  }
  return data;
}

function isSuperBalanced(node, cache) {
  var cache = {};

  if (!node) {
    return true;
  }

  var leftHeight = fetchHeight(node.left, cache);
  var rightHeight = fetchHeight(node.right, cache);

  var flag = Math.abs(leftHeight - rightHeight) > 1;

  if (flag) {
    return false;
  }

  return isSuperBalanced(node.left, cache) && isSuperBalanced(node.right, cache);

}

// console.log(findHeight(tree));
// console.log(isSuperBalanced(tree));

function isEmpty(arr) {
  return arr.length === 0;
}

function isLeaf(node) {
  return (!node.left && !node.right);
}

var foo = [2,3,4];
function isUnbalanced(arr) {
  var i = 0;
  var j = 0;
  for (i = 0; i < arr.length; i++) {
    var compared = arr[i];
    for (j = i + 1; j < arr.length; j++) {
      var diff = Math.abs(compared - arr[j]);
      if (diff > 1) {
        return true;
      }
    }
  }
  return false;
}
console.log(isUnbalanced(foo));

function isSuperBalanced(root) {
  var queue = [];
  var depths = [];
  var index = 0;

  queue.push([root, 0]);

  while (!isEmpty(queue)) {
    var data = queue.shift();
    var node = data[0];
    var height = data[1];
    if (isLeaf(node)) {
      depths.push(height);
    } else {
      if (node.left) {
        leftData = [node.left, height + 1];
        queue.push(leftData);
      }

      if (node.right) {
        rightData = [node.right, height + 1];
        queue.push(rightData);
      }

    }
  }

  if(isUnbalanced(depths)) {
    return false;
  } else {
    return true;
  }

}

isSuperBalanced(tree);

