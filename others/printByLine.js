function Node(value) {
	this.data = value;
	this.left = null;
	this.right = null;
}



var A = new Node(1);
var B = new Node(2);
var C = new Node(3);
var D = new Node(4);
var E = new Node(5);
var F = new Node(6);
var G = new Node(7);
var H = new Node(8);

A.left = B;
A.right = C;

B.left= D;
B.right = E;
C.left = F;
C.right = G;

D.left = H;


/*

		1
	   / \
	  2   3
	 / \ / \
	4  5 6  7
   /
  8  

*/


// Post order 라고 해서 꼭 로직이 맨 뒤에 가 있을 필요는 없다
// 제일 앞에 올 수도 있는 것이다
function longestRoutes(root, prevs, result) {
	if (!root) {
		return;
	}

	prevs = prevs.slice();
	prevs.push(root);

	if (root.left) {
		longestRoutes(root.left, prevs, result);	
	}

	if (root.right) {
		longestRoutes(root.right, prevs, result);	
	}

	if (!root.left && !root.right) {
		result.push(prevs);
	}

	
	

}

var routes = [];
debugger; longestRoutes(A, [], routes);
console.log(routes);


var array = [1,2,3,5,-5];
var total = 5;

// [2,3],[5],[2,3,5,-5]

function sumToTotal(array, total) {
	var prevs = array;
	for (var i = 0; i < prevs.length; i++) {
		var prev = prevs[i];

	}

}







