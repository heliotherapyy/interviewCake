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

function isLeaf(node) {
  return !node.left && !node.right;
}

function isValid(value, arr, direction) {
  if (!value || !arr || !direction) {
    console.error("error");
    return;
  }

  var flag;

  if (direction === 'left') {
    for (var i = 0; i < arr.length; i++) {
      (value < arr[i]) ? flag = true : flag = false;
    }
  } else if (direction === 'right') {
    for (var i = 0; i < arr.length; i++) {
      (value > arr[i]) ? flag = true : flag = false;
    }
  }

  return flag;
}
// Main Function
function isBSTValid(root, parents, direction) {
  if (!parents) {
    parents = [];
  }

  if (!root) {
    return true;
  } else if (isLeaf(root)) {
    return true;
  }

  var leftFlag, rightFlag;
  var whichSide = direction;

  if (root.left) {
    if (parents.length === 0) {
      leftFlag = root.left.value < root.value;
    } else {
      leftFlag = (root.left.value < root.value) && isValid(root.left.value, parents, whichSide);
    }
  }

  if (root.right) {
    if (parents.length === 0) {
      rightFlag = root.right.value > root.value;
    } else {
      rightFlag = (root.right.value > root.value) && isValid(root.right.value, parents, whichSide);
    }
  }

  if (leftFlag && rightFlag) {
    parents.push(root.value);
    return isBSTValid(root.left, parents.slice(0, parents.length -1), 'left') && isBSTValid(root.right, parents.slice(0, parents.length - 1), 'right');
  } else {
    return false;
  }
}

var root = new BinaryTreeNode(50);
var left1 = root.insertLeft(30);
left1.insertLeft(20);
left1.insertRight(60);
var right1 = root.insertRight(80);
right1.insertLeft(60);

debugger;


function whichChild(parent, root) {
  if (!parent) {
    return undefined;
  }
  if (parent.value > root.value) {
    return 'left';
  } else {
    return 'right';
  }
}

// Using BFS search
function isBSTValid(parent, root) {

  // holds a bug
  if (!root) {
    return true;
  }

  var left_flag = true;
  var right_flag= true;

  // first test
  if (root.left) {
    left_flag = root.left.value < root.value;
  }

  if (root.right) {
    right_flag = root.right.value > root.value;
  }

  if (!left_flag || !right_flag) {
    return false;
  }

  // second test
  // whichChild : (node, node) => String ('left', 'right');
  var rootWhere = whichChild(parent, root);
  if (!rootWhere) {
    // testing the very root of tree
    return isBSTValid(root, root.left) && isBSTValid(root, root.right);
  }

  var left_child = root.left;
  var right_child = root.right;
  var flag = false;

  if (rootWhere === 'left') {
    if (right_child.value < parent.value) {
      flag = true;
    }
  } else {
    if (left_child.value > parent.value) {
      flag = true;
    }
  }

  // using DFS traverse
  if (flag) {
    return isBSTValid(root, root.left) && isBSTValid(root, root.right);
  } else {
    return false;
  }

}

debugger;
var answer = isBSTValid(undefined, root);
console.log(answer);