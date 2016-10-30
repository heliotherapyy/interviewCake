function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}


function createBST(array, start, end) {
  if (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = array[mid];

    var root = new Node(middle);

    root.left = createBST(array, start, mid - 1);
    root.right = createBST(array, mid + 1, end);

    return root;
  }
}


var array = [1,2,3,4,5,6,7,12,14,20,353];
var root = createBST(array, 0, array.length - 1);
console.log(root);

/*
  번외: # of nodes
*/

function countNodes(root) {
  if (!root) return 0;
  else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}

var num = countNodes(root);
console.log(num);



