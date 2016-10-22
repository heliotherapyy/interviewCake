var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var root = new Node(20);
var root_left = root.left = new Node(10);
var root_right = root.right = new Node(30);

root_leftLeft = root_left.left = new Node(5);
root_leftRight = root_left.right = new Node(35);
root_rightLeft = root_right.left = new Node(25);
root_rightRight = root_right.right = new Node(40);


debugger; var answer = main(root);
console.log(answer);

function isBST(root) {
	// error check
	if (!root) return true;

	var left = isBST(root.left);
	if (left === -1) return -1;

	var right = isBST(root.right);
	if (right === -1) return -1;

	left = right = true;

	if (root.left) {
		left = root.data > root.left.data;
} 
if (root.right) {
	right = root.data < root.right.data;
}

if (left && right) {
	var leftChild = root.left;
	var rightChild = root.right;
	
	if (leftChild && leftChild.right) {
		left = root.data > leftChild.right.data;
}

if (rightChild && rightChild.left) {
	right = root.data < rightChild.left.data;
}

if (left && right) return true;
else return -1;
} else {
	return -1;
}
}

function main(root) {
	if (isBST(root) === -1) return false;
	else return true;
}