function Node(value) {
	this.data = value;
	this.next = null;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');

A.next = B;
B.next = C;
C.next = D;
D.next = A;

function findCycleStart(head) {
	var cache = {};
	var traverse = head;

	if (!traverse) {
		return null;
	}

	while (traverse) {
		var data = traverse.data
		if (!cache[data]) {
			cache[data] = true;
		} else {
			return traverse;
		}
		traverse = traverse.next;
	}
	return null;
}

var found = findCycleStart(A);
console.log(found.data)

