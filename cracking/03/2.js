function Stack() {
	this.storage = [];
	this.mins = [];
	this.min = null;
}

Stack.prototype.push = function(value) {
	this.storage.push(value);
	if (!this.min) {
		this.min = value;
		this.mins.push(value);
	} else if (this.min > value) {
		this.min = value;
	}
}

Stack.prototype.pop = function() {
	var data = this.storage.pop();
	if (data === this.min) {
		this.min = this.mins.pop();
	}
	return data;
}

Stack.prototype.getMin = function() {
	return this.min;
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(-10);
stack.push(2);
stack.pop();
stack.pop();

console.log(stack.getMin())
