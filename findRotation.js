var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'xsfsdafsdf',
    'asymptote', // <-- rotates here! 5
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

var words2 = ['k','v','a','b','c','d','e','g','i'];

// console.log('a' < 'b');
function getMinimum(a,b) {
    if (!a) {
        if (b) {
            return b;
        } else {
            return null;
        }
    } else if (!b) {
        if (a) {
            return a;
        } else {
            return null;
        }
    } else {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    }
}

function findRotation(array, start, end) {
    // See if rotation occurs
    if (array[start] < array[end]) {
        return 0;
    }

    // Base cases
    if (start > end) {
        return null;
    } else if (start === end) {
        return start;
    }

    var middleIndex = Math.floor((start + end) / 2);
    var middle = array[middleIndex];

    if (middle < array[end]) {
        return getMinimum(findRotation(array, 0, middleIndex - 1), middleIndex);
    } else {
        return (middleIndex + 1) + findRotation(array, middleIndex + 1, end);
    }
}

console.log(findRotation(words2, 0, words2.length - 1));