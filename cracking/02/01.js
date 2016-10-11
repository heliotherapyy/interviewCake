// /*
//   01
//   비정렬 연결 리스트에서 중복 문자를 제거하는 코드를 작성하라
// */



// var Node = function(data) {
//   this.data = data;
//   this.next = null;
// }

// var A = new Node('A');
// var B = new Node('B');
// var C = new Node('C');
// var D = new Node('D');
// var E = new Node('E');
// var E2 = new Node('E');
// var C2 = new Node('C');
// var C3 = new Node('C');

// A.next = B;
// B.next = C;
// C.next = D;
// D.next = E;
// E.next = E2;
// E2.next = C2;
// C2.next = C3;

// // O(N)
// var removeDuplicates = (head) => {
//   var traverse = head;
//   var prev;
//   var cache = {};

//   while (traverse) {
//     if (!cache[traverse.data]) {
//       cache[traverse.data] = true;
//     } else {
//       prev.next = traverse.next;
//       traverse = traverse.next;
//       continue;
//     }
//     prev = traverse;
//     traverse = traverse.next;
//   }

//   return head;

// }

/*
  October 10th
*/

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
  return this.root;
}

var LL = new LinkedList();
LL.append('a');
LL.append('b');
LL.append('c');
LL.append('a');
LL.append('d');

deleteDuplicates(LL.root);

function deleteDuplicates(root) {
  var cache = {};
  var prev = root;

  if (!prev) {
    return null;
  } else {
    cache[prev.value] = true;
  }

  while (prev.next) {
    if (isStored(prev.next.value, cache)) {
      prev.next = prev.next.next;
    } else {
      cache[prev.next.value] = true;
    }
    prev = prev.next;
  }
  console.log(root);
}

function isStored(value, cache) {
  for (var key in cache) {
    if (key === value) {
      return true;
    }
  }
  return false;
}





