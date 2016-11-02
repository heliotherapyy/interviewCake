function getFriendsOfFriends(user) {
  var secondFriends = getSecondFriends(user);

  var secondsByOrder = {};
  for (var i = 0; i < secondFriends.length; i++) {
    var friend = secondFriends[i];
    secondByOrder[friend] = countMutualFriends(friend);
  }

  var array = sortByMutualFriends(secondsByOrder);
}


// find friend in nth depth
function findFriends(start, depth) {
  var visited = {};
  var mutual = {};
  var step = 0;
  var prev = [start];
  visited[start.data] = true;
  var current = [];

  while (step < depth) {
    while (prev.length) {
      var node = prev[0];
      prev = prev.slice(1);
      for (var j = 0; j < node.adj.length; j++) {
        if (!visited[node.adj[j].data]) {
          current.push(node.adj[j]);
          visited[node.adj[j].data] = true;
          if (step + 1 === depth) {
            if (!mutual[node.adj[j].data]) mutual[node.adj[j].data] = [node.data];
            else {
              mutual[node.adj[j].data].push(node.data);
            }
          }

        }
      }
    }
    prev = current;
    current = [];
    step++;
  }
  console.log(mutual);
  return prev;
}

function Node(value) {
  this.data = value;
  this.adj = [];
}

var one = new Node(1);
var two = new Node('2');
var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');

one.adj = [A, B, C];
C.adj = [E, D];
D.adj = [two];

/*
      1 - A
    /   \
  B      C - E
        /
      D
        \
          2

*/

debugger; var list = findFriends(one, 3);
console.log(list);