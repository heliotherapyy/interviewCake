var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'xfsdfdas',
    'xgsadgssaf',
    'za',
    'zz',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

function main(array, start, end) {
    while (start <= end) {
        var mid_idx = Math.floor((start + end) / 2);
        var middle = array[mid_idx];

        if (isValid(array, mid_idx)) return middle;
        else if (middle > array[0]) {
            start = mid_idx + 1;
        } else {
            end = mid_idx - 1;
        }
    }
}

function isValid(array, mid_idx) {
    return array[mid_idx - 1] > array[mid_idx];
}

debugger; var answer = main(words, 0, words.length - 1);
console.log(answer);