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
