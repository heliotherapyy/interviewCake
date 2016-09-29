var rec1 = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,

    // width and height
    width: 2,
    height: 2
};

var rec2 = {

    // coordinates of bottom-left corner
    leftX: 5,
    bottomY: 3,

    // width and height
    width: 4,
    height: 10
};

function doesOverlap(rec1, rec2) {
  var rec1_rangeX = [rec1.leftX, rec1.leftX + rec1.width];
  var rec2_rangeX = [rec2.leftX, rec2.leftX + rec1.width];

  var rec1_rangeY = [rec1.bottomY, rec1.bottomY + rec1.height];
  var rec2_rangeY = [rec2.bottomY, rec2.bottomY + rec2.height];

  var doesXNotoverlap = (rec1_rangeX[1] <= rec2_rangeX[0]) || (rec2_rangeX[1] <= rec1_rangeX[0]);
  var doesYNotoverlap = (rec1_rangeY[1] <= rec2_rangeY[0]) || (rec2_rangeY[1] <= rec1_rangeY[0]);

  if (doesXNotoverlap && doesYNotoverlap) {
    return false;
  }

  return true;

}

function findIntersect(rec1, rec2) {
  if (!doesOverlap(rec1, rec2)) {
    console.log("Two do not intersect");
    return null;
  }

  var result = {
    leftX: 0,
    bottomY: 0,
    width: 0,
    height: 0
  };

  result.leftX = Math.max(rec1.leftX, rec2.leftX);
  result.bottomY = Math.max(rec1.leftX, rec2.leftX);

  var rec1_upperY = rec1.bottomY + rec1.height;
  var rec2_upperY = rec2.bottomY + rec2.height;
  var Y = Math.min(rec1_upperY, rec2_upperY);

  var rec1_rightX = rec1.leftX + rec1.width;
  var rec2_rightX = rec2.leftX + rec2.width;
  var X = Math.min(rec1_rightX, rec2_rightX);

  result.height = Y - result.bottomY;
  result.width = X - result.leftX;

  return result;

}

console.log(findIntersect(rec1, rec2));