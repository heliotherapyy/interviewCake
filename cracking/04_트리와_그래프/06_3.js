function findNextNode(target) {
	if (target.right) {
		return minimum(target.right);
} else {
	return findRightParent(target);
}
}

function minimum(node) {
	while (node && node.left) {
		node = node.left;
}
return node;
}

function findRightParent(node) {
	var parent = node.parent;
	while (parent && parent.right === node) {
		node = parent;
		parent = node.parent;
}
}


