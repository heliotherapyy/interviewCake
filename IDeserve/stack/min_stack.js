var MinStack = function() {
  this.storage = [];
  this.min = null;
  this.prevMins = [];
}

MinStack.prototype.push = function(value) {
  this.storage.push(value);

  if (!this.min) {
    this.min = value;
    return;
  }

  if (value > this.min) {
    var prevMinsTop = this.prevMins[this.prevMins.length - 1];

    if (prevMinsTop > value) this.prevMins.push(value);
    else {
      insert(this.prevMins, value);
    }
  } else if (value < this.min) {
    this.prevMins.push(this.min);
    this.min = value;
  }
}

MinStack.prototype.pop = function() {
  // some code
  var popped = this.storage.pop();
  if (this.min === popped) {
    this.min = this.prevMins.pop();
  } else {
    remove(this.prevMins, popped);
  }

  return popped;
}

MinStack.prototype.peak = function() {
  var length = this.storage.length;
  return this.storage[length - 1];
}

MinStack.prototype.isEmpty = function() {
  return this.storage.length === 0;
}

MinStack.prototype.minimum = function() {
  return this.min;
}

function insert(stack, value) {
  var extra = [];
  while (stack.peak() < value) {
    extra.push(stack.pop());
  }
  stack.push(value);
  while (extra.length) {
    stack.push(extra.pop());
  }
}

function remove(stack, value) {
  var extra = [];
  while (stack.peak() !== value) {
    extra.push(stack.pop());
  }

  stack.pop();

  while (extra.length) {
    stack.push(extra.pop());
  }
}

var stack = new MinStack();
stack.push(10);
stack.push(9);
stack.push(8);
stack.push(7);

console.log(stack.minimum());

stack.pop();
console.log(stack.minimum());

stack.pop();
console.log(stack.minimum());

stack.pop();
console.log(stack.minimum());

stack.pop();
console.log(stack.minimum());

