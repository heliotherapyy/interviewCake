function TempTracker() {

  var max, min;
  var mostFrequent = 0;
  var sum = 0;
  var count = 0;
  var storage = {};
  var isEmpty = true;

  this.insert = function(num) {
    if (!storage[num]) {
      if (isEmpty) {
        max = num;
        min = num;
        isEmpty = false;
      }

      storage[num] = 1;

    } else {
      storage[num] += 1;
    }

    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }

    sum += num;
    count++;
    if (storage[num] > mostFrequent) {
      mostFrequent = num;
    }
  }

  this.getMax= function() {
    return max;
  }

  this.getMin = function() {
    return min;
  }

  this.getMean = function() {
    return sum / count;
  }

  this.getMode = function() {
    return mostFrequent;
  }
}

var device = new TempTracker();
device.insert(100);
device.insert(101);
device.insert(110);
device.insert(105);
