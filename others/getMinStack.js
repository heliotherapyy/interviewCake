function Stack() {
    // initialize an empty array
    this.items = [];
    this.mins = [];
    this.min = null;
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
    if (!this.min) {
    	this.min = item;
    } else {
    	if (this.min > item) {
    		this.mins.push(this.min);
    		this.min = item;
    	}
    }
};

// remove the last item
Stack.prototype.pop = function() {
    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    var popped = this.items.pop();
    if (popped === this.min) {
    	this.mins.pop();
    	this.min = this.mins[this.mins.length - 1];
    }
    return popped;
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }

    return this.items[this.items.length -1];
};

Stack.prototype.getMin = function() {
	return this.min;
}

var stack = new Stack();
stack.push(10);
stack.push(9);
stack.push(8);
stack.pop();
stack.pop();
var answer = stack.getMin();
console.log(answer);

