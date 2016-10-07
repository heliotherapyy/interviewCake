function kthToLastNode(num, head) {
  if (!head) {
    return null;
  }

  // var new_root = reverse(head)[0];
  // var count = reverse(head)[1];

  // if (num > count) {
  //   return null;
  // }

  var new_root = reverse(head);
  for (var i = 0 ; i < num - 1 ; i++) {
    new_root = new_root.next;
  }

  console.log(new_root.value);
}

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function reverse(root) {
  if (!root) {
    return null;
  }

  var count = 0;

  var next = root;
  var prev = null;

  while (next) {
    next = root.next;
    root.next = prev;
    prev = root;

    if (next) {
      root = next;
      count++;
    }
  }

  return root;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);
// returns the node with value "Devil's Food" (the 2nd to last node)