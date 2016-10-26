var array =  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

function condensMeetings(array) {
  if (array.length === 0) return array;

  // O(nLogn)
  array.sort(function (a, b) {
    if (a.startTime <= b.startTime) return -1;
    else return 1;
  });
  console.log(array);

  var result = [];

  var merged = array[0];

  for (var i = 1; i < array.length; i++) {
    var newSchedule = array[i];
    if (doesOverlap(merged, newSchedule)) {
      merged.endTime = Math.max(merged.endTime, newSchedule.endTime);
    } else {
      result.push(merged);
      merged = newSchedule;
    }
  }

  result.push(merged);
  console.log(result);
}

function doesOverlap(object1, object2) {
  if (object1.startTime > object2.endTime || object1.endTime < object2.startTime) {
    return false;
  } else {
    return true;
  }
}

condensMeetings(array);