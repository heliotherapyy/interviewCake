/* Setting */
var Node = function(data) {
  this.value = data;
  this.next = null;
}

var A = new Node(1);
var B = new Node(9);
var C = new Node(7);
var D = new Node(8);
var E = new Node(4);

var X = new Node(8);
var Y = new Node(4);
var Z = new Node(9);

E.next = D;
D.next = C;
// C.next = B;
// B.next = A;

Z.next = Y;
Y.next = X;

var LL = function() {
  this.root = null;
}

LL.prototype = {
  append : function(value) {
    if (!this.root) this.root = new Node(value);
    else {
      var ptr = this.root;
      while (ptr.next) {
        ptr = ptr.next;
      }
      ptr.next = new Node(value);
    }
  }
}

var sum = function(n1, n2) {
  var flag = false;
  var result = new LL();

  while (n1 && n2) {
    var sum = n1.value + n2.value;
    if (flag) sum++;
    if (sum > 9) {
      sum = sum - 10;
      flag = true;
    } else flag = false;

    result.append(sum);
    n1 = n1.next;
    n2 = n2.next;
  }

  var rem = (n1) ? n1 : n2;
  while (rem) {
    var sum = rem.value;
    if (flag) {
      sum++;
    }

    if (sum > 9) {
      sum = sum - 10;
      flag = true;
    } else flag = false;

    result.append(sum);
    rem = rem.next;
  }

  if (flag) {
    result.append(1);
  }

  return result;
}

var sum = sum(E, Z);
console.log(sum);