function SOS(limit) {
  this.SOS = [];
  this.count = 0;
  this.limit = limit;
}

SOS.prototype.push = function(value) {
  if (this.SOS.length === 0) {
    var current = [];
    this.SOS.push(current);
  }

  var current = this.SOS.pop();
  if (this.count < this.limit) {
    current.push(value);
    this.count++;
    this.SOS.push(current);
  }

  if (this.count === this.limit) {
    this.SOS.push([]);
    this.count = 0;
  }

  console.log(this.SOS);
}

SOS.prototype.pop = function() {
  if (this.SOS.length === 0) {
    console.error("no data");
    return null;
  }

  var current = this.SOS[this.SOS.length - 1];

  if (current.length !== 0) {
    var data = current.pop();
  } else {
    this.SOS.pop();
    current = this.SOS[this.SOS.length - 1];
    var data = current.pop();
  }

  if (current.length === 0) {
    this.SOS.pop();
  }

  console.log(data);
  return data;
}

var sos = new SOS(4);
sos.push(1);
sos.push(2);
sos.push(3);
sos.push(4);
sos.pop();
sos.pop();
sos.pop();
sos.pop();
sos.pop();
