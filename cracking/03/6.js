function stackSort(stack) {
  var right = new Stack();
  var left = stack;
  while (true) {
    var left_temp = left.pop();
    var right_temp;

    if (right.isEmpty()) {
      right.push(left_temp);
      continue;
    }

    right_temp = left.peak();

    if (left_temp < right_temp) {
      right.push(left_temp);
    } else {
      right_temp = left.pop();
      right.push(left_temp);
      right.push(right_temp);
    }

    if (left.isEmpty()) {
      left = moveData(right, left);
      if (left === true) {
        return left;
      }
    }
  }
}

function moveData(from, to) {
  var prev = from.pop();
  var current;

  to.push(prev);
  var flag = true;

  while (!from.isEmpty()) {
    current = from.pop();
    if (current < prev) {
      flag = false;
    }
    to.push(current);
  }

  if (flag) {
    return true;
  } else {
    return to;
  }
}

