// 와 시발 대박

function findRoutes(root, n, routes, result, level) {
  if (!root) return;

  // for each node, ask if it is the last node that sums up to n
  // given the route, start from the end of route,
  // start adding up from the back. if bak ===n, store the route to result

  routes[level] = root.data;
  var sum = 0;
  for (var i = level; i >= 0; i--) {
    sum += routes[i];
    if (sum === n) {
      result.push(routes.slice(i, level + 1));
    }
  }
  findRoutes(root.left, n, routes.slice(), result, level + 1);
  findRoutes(root.right, n, routes.slice(), result, level + 1);

  return result;
}

var Node = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

/*
          1
        /  \
      2     3
    /  \     \
  4     5     7
*/

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(5);
var seven = new Node(7);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = four;
four.right = seven;

debugger; var result = findRoutes(one, 3, [], [], 1);
console.log(result);


