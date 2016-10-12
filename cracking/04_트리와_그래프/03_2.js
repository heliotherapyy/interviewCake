function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function createBST(array, start, end) {
  if (start <= end) {
    var mid_idx = Math.floor((start + end) / 2);
    var middle = array[mid_idx];
    var root = new Node(middle);

    root.left = createBST(array, start, mid_idx - 1);
    root.right = createBST(array, mid_idx + 1, end);
    return root;
  }
}

var array = [1,2,3,4,5,6,7,8];
var root = createBST(array, 0, array.length - 1);

function inOrder(root) {
  if (!root) {
    return null;
  }

  inOrder(root.left);
  console.log(root.value);
  inOrder(root.right);
}

inOrder(root);