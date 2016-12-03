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


var fixBST = function(root) {
  if (!root) return null;

  var list = inOrderWalk(root);

  var nodes = findSwapped(list);
  if (nodes) replace(nodes);

  return root;
}

var inOrderWalk = function(root, list) {
  if (!root) return null;

  list = (!list) ? [] : list;

  inOrderWalk(root.left, list);
  list.push(root);
  inOrderWalk(root.right, list);

  return list;
}

var findSwapped = function(list) {
  var first;
  var second;

  var current, prev = list[0];

  for (var i = 1; i < list.length; i++) {
    current = list[i];

    if (prev.value > current.value) {
      first = (!first) ? prev : first;
      second = current;
    } else {
      prev = current;
    }
  }

  return [first, second];
}

var replace = function(first, second) {
  var temp = first.value;
  first.value = second.value;
  second.value = temp;
}

fixBST(root);
