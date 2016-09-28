function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

// Find second largest element in BST

/*
		 50
	  25  	80
	10	29 X   100
              90     150

Find the parent of the very right leaf of the tree

*/

// Using DFS
/* 
	Go to the very right leaf of the tree, call it rightLeaf
	if rightLeaf has leftChild, return the very right leaf of the leaf child
	else return aparent
*/

function findGreatest(node) {
	if (!node) {
		return null;
	}

	var flag = !!node.right;
	while (flag && !node.right) {
		node = node.right;
	}

	return node.value;
}
function findSecondGreatest(node) {
	if (!node) {
		return null;
	}

	var doesRightExist = !!(node.right);

	if (doesRightExist) {
		while (node.right.right) {
			node = node.right;
		}	
	} else {
		if (node.left) {
			return findGreatest(node.left);
		}
		return null;
	}
	

	var right_child = node.right;

	if (!right_child.left) {
		return node.value;
	} else {
		findGreatest(right_child.left);
	}
}


var root = new BinaryTreeNode(50);
var left = root.insertLeft(30);
var right = root.insertRight(80);
var right_right = right.insertRight(100);
right.insertLeft(70);
var right_left = right_right.insertLeft(99);


var answer = findSecondGreatest(root);
console.log(answer);