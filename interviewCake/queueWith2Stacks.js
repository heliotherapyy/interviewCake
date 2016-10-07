/*
Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).
*/


function Queue() {
  this.storage1 = [];
  this.storage2 = [];
}

Queue.prototype.enqueue = function(value) {
  this.storage1.push(value);
  console.log(this.storage1);
}

Queue.prototype.dequeue = function() {

  var storage1 = this.storage1;
  var storage2 = this.storage2;

  if (storage1.length === 0) {
    console.error("Queue is empty");
    return null;
  }

  moveData(storage1, storage2);
  var dequeued = this.storage2.pop();
  moveData(storage2, storage1);
  console.log(storage1);
  return dequeued;
}

function moveData(array1, array2) {
  while (array1.length > 0) {
    var popped = array1.pop();
    array2.push(popped);
  }

}

var queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
queue.dequeue();