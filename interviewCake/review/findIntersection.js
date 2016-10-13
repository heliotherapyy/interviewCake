var rec1 = {
    leftX: 1,
    bottomY: 5,
    width: 10,
    height: 4,

};

var rec2 = {
  leftX: 3,
  bottomY: 6,
  width: 4,
  height: 6
}

function findIntersection(rec1, rec2) {
  var intersect = {};
  var recs = [rec1, rec2];

  intersect.leftX = sort(recs, "bottomX")[1];
  intersect.bottomY = sort(recs, "bottomY")[1];

  var rightX = sort(recs, "rightX")[0];
  var upperY = sort(recs, "upperY")[0];

  // if (!doesOverlap(intersect, rightX, upperY)) {
  //   return null;
  // }

  intersect.width = rightX - intersect.leftX;
  intersect.height = upperY - intersect.bottomY;

  console.log(intersect);
  return intersect;
}

// Array, string -> Array
function sort(recs, instruction) {
  var result = [];
  var first = recs[0];
  var second = recs[1];

  if (instruction === "bottomX") {
    if (first.leftX <= second.leftX) {
      result.push(first, second);
    } else {
      result.push(second, first);
    }
  } else if (instruction === "bottomY") {
    if (first.bottomX <= second.bottomX) {
      result.push(first, second);
    } else {
      result.push(second, first);
    }
  } else if (instruction === "rightX") {
    var first_rightX = first.leftX + first.width;
    var second_rightX = second.leftX + second.width;
    if (first_rightX <= second_rightX) {
      result.push(first, second);
    } else {
      result.push(second, first);
    }
  } else {
    var first_upperY = first.bottomY + first.height;
    var second_upperY = second.bottomY + first.height;
    if (first <= second_upperY) {
      result.push(first, second);
    } else {
      result.push(second, first);
    }
  }
  return result;
}

findIntersection(rec1, rec2);