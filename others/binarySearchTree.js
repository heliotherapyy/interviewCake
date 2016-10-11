function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(value) {
  if (!this.root) {
    this.root = new Node(value);
    return;
  }
  var root = this.root;
  var traverse = this.root;

  while (traverse) {
    if (traverse.value < value) {
      if (traverse.right) {
        traverse = traverse.right;
      } else {
        traverse.right = new Node(value);
        break;
      }
    } else {
      if (traverse.left) {
        traverse = traverse.left;
      } else {
        traverse.left = new Node(value);
        break;
      }
    }
  }

  console.log(this.root);
}

BST.prototype.delete = function(value) {
  var traverse = this.root;
  if (!traverse) {
    return null;
    console.error("There is nothing is tree");
  }

  var searchResult = findParent(traverse, value);
  if (!searchResult) {
    return null;
    console.error("Not found");
  }
  var parent = searchResult[0];
  var direction = searchResult[1];
  var target;
  if (direction === "right") {
    target = parent.right;
  } else {
    target = parent.left;
  }

  // if target does not have childs
  deleteNode(parent, target, direction);
}

function deleteNode(parent, target, direction) {
  if (!target.left && !target.right) {
    parent[direction] = null;
  } else if (!target.left && target.right) {
    parent[direction] = target.right;
  } else {
    var veryRight = findVeryRight(target);
    parent[direction] = veryRight;
    parent[direction].left = target.left;
    parent[direction].right = target.right;
    veryRight = null;
  }
}

function findVeryRight(node) {
  var traverse = node.left;
  while (traverse.right) {
    traverse = traverse.right;
  }
  return traverse;
}


