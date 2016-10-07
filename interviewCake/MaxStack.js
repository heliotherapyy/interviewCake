function MaxStack() {
    // initialize an empty array
    this.items = [];
    this.max;
}

// push a new item to the last index
MaxStack.prototype.push = function(item) {
    if (!this.max) {
        this.max = item;
    }

    this.items.push(item);
    this.max = Math.max(this.max, item);
};

// remove the last item
MaxStack.prototype.pop = function() {
    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
MaxStack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

MaxStack.prototype.getMax = function() {
    return this.max;
}

var stack = new MaxStack();
stack.push(10);
stack.push(1234);
stack.push(12);
stack.push(765);
stack.push(1);
var answer = stack.getMax();
console.log(answer);