  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'zsadsadf',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

var words = [2,2,2];

/*
    5 6 7 8 9 10 11 12 13 14 1 2 3 4
*/

// Let's say there are two parts in array, left & right
// everything in right side is smaller than ones in left because they are rotated
function binarySearch(array, start, end) {
    while (start <= end) { // not sure yet
        var mid_idx = Math.floor((start + end) / 2);
        var middle = array[mid_idx];
        if (middle >= array[start] && middle <= array[end]) {
            return start;
        } else if (middle >= array[start] && middle >= array[end]) {
            // we are in the left side of array
            start = mid_idx + 1;
        } else {
            // we are in the right side of array
            start = mid_idx;
        }
    }

    return null;
}

debugger; var answer = binarySearch(words, 0, words.length - 1);
console.log(answer);