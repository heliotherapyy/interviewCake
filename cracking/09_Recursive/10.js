function getHighest(arr) {
  var prev;
  var result = [];
  while (true) {
    prev = getNext(arr, prev);
    if (prev) result.push(prev);
    else break;
  }

  return result;
}

function getNext(arr, target) {
  if (!target) {
    var prev = arr[0];
    for (var i = 0; i < arr.length; i++) {
      var box = arr[i];
      if (isBigger(box, prev)) {
        prev = box;
      }
    }
    return prev;
  } else {
    var candidate;
    for (var i = 0; i < arr.length; i++) {
      if (isBigger(target, arr[i])) {
        if (!candidate) candidate = arr[i];
      } else {
        if (isBigger(arr[i], candidate)) candidate = arr[i];
      }
    }
    return candidate;
  }
}

function isBigger(from, to) {
  if (!from || !to) return false;

  var flag = true;

  if (isSame(from, to)) return false;

  if (from.x < to.x) flag = false;
  if (from.y < to.y) flag = false;
  if (from.z < to.z) flag = false;

  return flag;
}

function isSame(from, to) {
  if (!from || !to) return false;
  var flag = true;

  if (from.x !== to.x) flag = false;
  if (from.y !== to.y) flag = false;
  if (from.z !== to.z) flag = false;

  return flag;
}

function Box(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

var box1 = new Box(10,10,10);
var box2 = new Box(11,9,12);
var box3 = new Box(5,7,3);

var array = [box1,box2,box3];

debugger; var answer = getHighest(array);
console.log(answer);