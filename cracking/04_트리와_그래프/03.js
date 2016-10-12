/*
  October 3rd
*/

var array = [1,2,3,4,5,6,7,8,9,10];

function Tree(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

function createBST(array, start, end) {
  if (!array.length) {
    return null;
  } else if (start > end) {
    return null;
  }

  var mid = Math.floor((end - start) / 2) + start;

  var root = new Tree(array[mid]);
  root.left = createBST(array, start, mid-1);
  root.right = createBST(array, mid+1, end);

  return root;
}

var root = createBST(array, 0, array.length - 1);
console.log(root);