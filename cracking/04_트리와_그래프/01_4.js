var Node = function(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

var root = new Node(20);
var root_left = root.left = new Node(10);
var root_right = root.right = new Node(30);
root_leftLeft = root_left.left = new Node(5);
root_leftRight = root_left.right = new Node(15);
root_rightLeft = root_right.left = new Node(25);
root_rightRight = root_right.right = new Node(40);
root_rightRightRight = root_rightRight.right = new Node(50);
root_rightRightRight.right = new Node(60);

debugger; var answer = main(root);
console.log(answer);

function isBalanced(node) {
	if (!node) return true;
	
	var left = isBalanced(node.left);
	if (left === -1) return -1;

	var right = isBalanced(node.right);
	if (right === -1) return -1;

	left = findHeight(node.left);
	right = findHeight(node.right);

	if (Math.abs(left - right) > 1) {
		return -1;
	} else {
		return true;
	}
}

function main(node) {
	if (isBalanced(node) === -1) return false;
	else return true;
}

// O(h) - O(log2) or O(n)
function findHeight(node) {
	if (!node) return 0;
	else return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
}


