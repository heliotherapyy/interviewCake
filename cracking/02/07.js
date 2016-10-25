// 사진 찍은거 그대로 복사해보기

/* Notes
Questions:
1. Length given? : NO


Input: head
Output: boolean

Examples:

abccba -> true (even)
abba -> true

abcba -> true (odd)

Approach:
Using stack, and one runner in the middle of LLs
store every value until the runner reaches the half point
Pop from stack and compare it with runner's value (runner is still moving towards the end)

*/

/* Debugger

*/

function isPalindrome(head) {
  var stack = [];
  var runner = findHalf(head, stack);

  while (runner) {
    var popped = stack.pop();
    if (runner.value === popped) continue;
    else return false;
  }

  return true;

}

/*
a b c d e f
a b c d e

stack: [a, b]
stack: [a, b]
*/

// returns a node at the half point
function findHalf(head, stack) {
  var runner1, runner2;
  runner1 = runner2 = head;

  while (runner2) {
    stack.push(runner1.value);
    runner1 = runner1.next;
    runner2 = runner2.next;
    runner2 = runner2.next;
    if (!runner2 || !runner2.next) break;
  }

  while (runner2 && runner2.next) {
    runner1 = runner1.next;
    runner2 = runner2.next.next;
  }


  // when LL is even
  if (!runner2) {
    return runner1;
  } else {
    return runner1.next;
  }
}
