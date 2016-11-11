/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Subscribe to see which companies asked this question
*/

/**
 * Definition for singly-linked list.
 function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 /*
  1 - 3 - 5
  2 - 4

  1 - 2 - 3 - 4 - 5
 */


function ListNode(val) {
      this.val = val;
      this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(3);
var c = new ListNode(5);

a.next = b;
b.next = c;

var one = new ListNode(2);
var two = new ListNode(4);
var three = new ListNode(6);

one.next = two;
two.next = three;

var un = new ListNode(0.5);
var dos = new ListNode(1.5);
var tres = new ListNode(10);

un.next = dos;
dos.next = tres;

var array = [a, one, un];
mergeKLists(array);

function mergeKLists(lists) {
  var merged = mergeTwoLists(lists[0], lists[1]);
  for (var i = 2; i < lists.length; i++) {
    merged = mergeTwoLists(merged, lists[i]);
  }
  return merged;
}

function mergeTwoLists(head1, head2) {
  var smallest = (head1.val > head2.val) ? head2 : head1;

  var cache = {};

  var greatest = update(cache, head1, head2);

  var step = greatest.val;
  var end = smallest.val;
  while (step >= end) {
    if (cache[step]) {
      greatest = insert(greatest, step);
    }
    step--;
  }

  return greatest;
}

function insert(node, value) {
  var newNode = new ListNode(value);
  if (!node) return newNode;
  else {
    newNode.next = node;
    return newNode;
  }
}

function update(cache, head1, head2) {
  var max = head1;

  while (head1) {
    max = (head1.val > max.val) ? head1 : max;
    cache[head1.val] = true;
    head1 = head1.next;
  }

  while (head2) {
    max = (head2.val > max.val) ? head2 : max;
    cache[head2.val] = true;
    head2 = head2.next;
  }

  return max;
}