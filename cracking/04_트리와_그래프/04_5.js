function doesRouteExist(root, dest, nodes) {
  var cache = {};

  for (var i = 0; i < nodes.length; i++) {
    for (var i = 0; i < root.adjList.length; i++) {
      var neighbor = root.adjList[i];
      visit(neighbor, cache);
      if (neighbor.value === dest.value) return true;
      else {
        for (var j = 0; j < neighbor.adjList.length; j++) {
          doesRouteExist(neighbor, dest, nodes);
        }
      }
    }
  }
  return false;

}


/*
  Input: root
  Output: Array of heads (Linked List)

  two pointers.
    - parents
    - children

*/
function Node(data) {
  this.value = data;
  this.next = null;
}

function nodesByDepth(root) {
  // error check
  if (!root) return null;

  var result = [];
  var parents = [];
  var children;

  result.push([root]);
  parents.push(root);

  // O(N)
  while (parents.length !== 0) {
    for (var i = 0; i < parents.length; i++) {
      var parent = parents[i];

      if (parent.left) current.push(parent.left);
      if (parent.right) current.push(parent.right);
    }

    if (children.length === 0) {
      break;
    }

    parents = children;
    children = [];
    result.push(parents);
  }

  // O(n)
  for (var i = 0; i < result.length; i++) {
    result[i] = createLL(result[i]);
  }

  return result;

}

function createLL(array) {
  var head;
  for (var i = 0; i < array.length; i++) {
    head = connect(head, array[i]);
  }
  return head;
}

function connect(head, graphNode) {
  var newNode = new Node(graphNode.value);

  if (!head) {
    return newNode;
  } else {
    newNode.next = head;
    return head;
  }
}