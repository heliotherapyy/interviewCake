var BinaryTree = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var A = new BinaryTree(10);
A.left = new BinaryTree(5);
var B = A.left;
A.right = new BinaryTree(15);
var C = A.right;

B.left = new BinaryTree(4);
var D = B.left;
B.right = new BinaryTree(7);
C.left = new BinaryTree(13);
C.left.right = new BinaryTree(14);

D.left = new BinaryTree(2);
D.left.left = new BinaryTree(0);

/*
			10
		5		15
	  4	  7	  13
 	2			14
  0
*/

function findSecondLargest(root) {
	var veryRightParent = findVeryRightSubtree(root);

	if (veryRightParent.right) {
		return veryRightParent.data;
	} else if (veryRightParent.left) {
		var veryRightChild = findVeryRightLeaf(veryRightParent.left);
		return veryRightChild.data;
	}

	return null;
}

// Find the very right parent which has either left or right leaf
function findVeryRightSubtree(root) {
	var ptr = root;
	if (!ptr.right) {
		return ptr;
	} else if (!ptr.right.right && ptr.right.left) {
		return ptr.right;
	}

	while (ptr.right.right || ptr.right.left) {
		ptr = ptr.right;
	}

	return ptr;
}

function findVeryRightLeaf(root) {
	if (!root) {
		return null;
	}

	var ptr = root;
	while (ptr.right) {
		ptr = ptr.right;
	}

	return ptr;
}

var answer = findSecondLargest(A);
console.log(answer);