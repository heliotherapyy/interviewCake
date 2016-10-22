/*
	Using two stacks, implement MyQueue

	Queue: FIFO
	Stack: LIFO

	
Strategy #1
Use one stackA as primary storage
When dequeue is called, move stackA to stackB, pop it 
When enqueue is called, push it to stackA.
*/

function myQueue() {
	this.storage = [];
	this.buffer = [];
}

myQueue.prototype.enqueue = function(value) {
	// Case 1
this.storage.push(value);

	// Case 2
	if (this.storage.length === 0 && this.buffer.length > 0) {
		// just finished dequeue
moveData(this.buffer, this.storage); 
this.storage.push(value);
}
}

// pop the very bottom data from our storage
myQueue.prototype.dequeue = function() {

moveData(this.storage, this.buffer);

// Now this.storage is empty while this.buffer is full
return this.buffer.pop();
}

function moveData(from, to) {
	for (var i = 0; i < from.length; i++) {
		var data = from[i];
		to.push(data);
}
}
