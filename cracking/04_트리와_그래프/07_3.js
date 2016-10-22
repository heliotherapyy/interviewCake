/*
	Yes duplicates
	
Approach #1 
DFS (post-order)

*/

function findCommonAncestor(root, A, B) {
	if (!root) return false;

	var left = findCommonAncestor(root.left, A, B);
	var right = findCommonAncestor(root.right, A, B);

	// Logic 
	if (left || right) {
		var leftHeight = findHeight(root, left);
var rightHeight = findHeight(root, right); 
if (leftHeight <= rightHeight) return left;
else return right;	
} else {
	var left = searchNode(root.left, A, B);
		var right = searchNode(root.right, A, B);
		if (left && right && left !== right) return root;
		else false;
}
}

var maxNumber = 100;

// Post-order DFS
function findHeight(root, target) {
	if (root.data === target.data) return 0;
	else if (!root) return -1;
	else {
		var leftHeight = findHeight(root.left);
		if (leftHeight === -1) leftHeight = maxNumber;
		var rightHeight = findHeight(root.right);
		if (rightHeight === -1) rightHeight = maxNumber;
return Math.min(findHeight(root.left), findHeight(root.right)) + 1;
}
}

function searchNode(root, A, B) {
	if (!root) return null;
	
	if (root.data === A.data || root.data === B.data) {
		return root;
} else {
	var left = searchNode(root.left, A, B) 
	var right = searchNode(root.right, A, B);

	if (left) return left;
	if (right) return right;
	return null;
}
}

function main(root, A, B) {
var result = findCommonAncestor(root, A, B);
if (result == -1) return null;
else return result;
}




var BinaryTree = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var A = new BinaryTree('A');
A.left = new BinaryTree('B');
var B = A.left;
A.right = new BinaryTree('C');
var C = A.right;

B.left = new BinaryTree('D');
var D = B.left;
B.right = new BinaryTree('E');
C.left = new BinaryTree('F');
C.right = new BinaryTree('G');

D.left = new BinaryTree('H');
D.left.left = new BinaryTree('J');

var result = findCommonAncestor(A, D.left, B);
console.log(result);