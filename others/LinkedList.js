function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.root = null
}

LinkedList.prototype.append = function (value) {
  if (!this.root) {
    this.root = new Node(value);
    return;
  }

  var traverse = this.root;
  while (traverse.next) {
    traverse = traverse.next;
  }

  traverse.next = new Node(value);
  return this.root;
}

LinkedList.prototype.delete = function (value) {
  var prev = this.root;
  var next;

  if (prev.value === value) {
    if (prev.next) {
      this.root = prev.next;
    } else {
      this.root = null;
    }

    return null;
  }

  while (prev) {
    if (prev.next && prev.next.value === value) {
      var target = prev.next;
      var next = target.next;
      prev.next = next;
      return;
    }

    prev = prev.next;
  }

  if (!prev) {
    console.error("Not found");
    return null;
  }

  console.log(this.root);
}
