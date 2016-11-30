var Stack = function() {
  this.storage = [];
}

Stack.prototype.push = function(value) {
  this.storage.push(value);
}

Stack.prototype.pop = function() {
  return this.storage.pop();
}

Stack.prototype.peak = function() {
  var length = this.storage.length;
  return this.storage[length - 1];
}

Stack.prototype.isEmpty = function() {
  return this.storage.length === 0;
}

var findNextGreater = function(array) {
  if (!array || !array.length) return null;

  var stack = new Stack();
  var result = {};

  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    result[num] = null;

    if (!stack.isEmpty() && num > stack.peak()) {
      while (num > stack.peak()) {
        var popped = stack.pop();
        result[popped] = num;
      }
    }

    stack.push(num);
  }

  return result;
}

var array = [98, 23, 54, 12, 20, 7, 27];
debugger; var result = findNextGreater(array);
console.log(result);
