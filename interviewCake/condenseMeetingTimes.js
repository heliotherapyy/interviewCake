/*    Logic
    We are retuning merged time slots that do not overlap
    Each time ragne can be thought of as a line segment (starting, end points)

    Each merged timeslots (Z) = merged timeslots so far (X) + new timeslot (Y)
    Greedy algorithm.
*/

var input = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

function condenseMeetingTimes(array) {
    var result = [];
    result.push(array[0]);

    // O(N)
    for (var i = 1; i < array.length; i++) {
        var foundIndex = doesOverlap(result, array[i]);
        if (foundIndex !== -1) {
            update(result, array[foundIndex], foundIndex); // can be improved later
        } else {
            result.push(array[i]);
        }
    }

    console.log(result);
}

// O(N)
function doesOverlap(array, range) {
    // how do we know whether two ranges overlap or not?
    for (var i = 0; i < array.length; i++) {
        // target: object
        var target = array[i];
        var flag = (target.startTime > range.endTime || target.endTime < range.startTime)
        if (!flag) {
            // two ranges are overlapping
            return i;
        }
    }

    return -1;
}

function update(array, range, position) {
    array[position] = merge(array[position], range);
}

function merge(range1, range2) {
    var min = Math.min(range1.startTime, range2.startTime);
    var max = Math.max(range1.endTime, range2.endTime);

    return {
      startTime: min,
      endTime: max
    }
}

debugger; condenseMeetingTimes(input);

// This can be improved using sorting in the beginning
// O(NlogN)
function improved(array) {
    var sorted = quickSort(array);
    var result = [];
    result.push(sorted[0]);
    sorted.slice(1);
    var result_index = 0;
    while (sorted.length > 0) {
        var next = sorted[0];
        if (doesOverlap(result[result_index], next)) {
            result[result_index] = merge(result[result_index], next);
        } else {
            result.push(next);
            result_index++;
        }
            sorted.slice(1);
    }
}



