function isBSTValid(root) {
	if (!root) {
		return true;
	}

	
	if (root.left) {
		var left_flag = isBSTValid(root.left);
		if (left_flag === -1) {
			return -1;
		} 	
	}

	if (root.right) {
		var right_flag = isBSTValid(root.right);
		if (right_flag === -1) {
			return -1;
		}
	}

	if (root.left) {
		left_flag = root.data > root.left.data;
		if (root.left.right) {
			left_flag = root.data > root.left.right.data;
		} 
		if (!left_flag) {
			return -1;
		}
	}
	
	if (root.right) {
		right_flag = root.data < root.right.data;
		if (root.right.left) {
			right_flag = root.data < root.right.left.data;
		} 
		if (!right_flag) {
			return -1;
		}
	}

	return true;
}

function main(root) {
	if (isBSTValid(root) === -1) {
		return false;
	} else {
		return true;
	}
}

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
C.left = new BinaryTree(9);
C.right = new BinaryTree(20);

D.left = new BinaryTree(2);
D.left.left = new BinaryTree(0);

var answer = main(A);
console.log(answer); 