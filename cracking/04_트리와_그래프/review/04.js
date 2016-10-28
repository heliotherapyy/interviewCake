function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}


function createBST(array, start, end) {
  if (start <= end) {
    var mid = Math.floor((start + end) / 2);
    var middle = array[mid];

    var root = new Node(middle);

    root.left = createBST(array, start, mid - 1);
    root.right = createBST(array, mid + 1, end);

    return root;
  }
}


var array = [1,2,3,4,5,6,7,12,14,20,353];
var root = createBST(array, 0, array.length - 1);

function nodesByDepth(root) {
  var result = [];
  var prev = new LinkedList();
  prev.append(root);
  result.push(prev);

  while (true) {
    var current = new LinkedList();
    while (prev.head) {
      if (prev.head.left) current.append(prev.head.left);
      if (prev.head.right) current.append(prev.head.right);
      prev.head = prev.head.next;
    }

    if (current) {
      prev = current;
    } else {
      break;
    }

    result.push(prev);
  }

  return result;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function LLNode(data) {
  this.data = data;
  this.next = null;
}

LinkedList.prototype.append = function(data) {
  if (!this.head) this.head = this.tail = new LLNode(data);
  else {
    this.tail.next = new LLNode(data);
    this.tail = this.tail.next;
  }
}

debugger; nodesByDepth(root);