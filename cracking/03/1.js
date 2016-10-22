/* Note

Create a new stack holding previous mins!
*/

function Stack() {
	this.storage = [];
	this.min = null;
	this.mins = [];

	console.log(this);
}

// O(1)
Stack.prototype.push = function(value) {
	if (!this.min) {
		this.min = value;
		this.mins.push(this.min);
} else {
	if (this.min > value) {
		// update min
		this.min = value;
		this.mins.push(this.min);
} 
}
this.storage.push(value);
}

// O(1)
Stack.prototype.pop = function() {
	var popped = this.storage.pop();
	if (popped == this.min) {
	this.mins.pop();
	this.min = this.mins[this.mins.length - 1];
}
return popped;
}

// O(1)
Stack.prototype.getMin = function() {
	return this.min;
}
