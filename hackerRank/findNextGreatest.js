function processData(input) {
    //Enter your code here
    var lastDigits = [];
    input = input.split("");

    for (var i = input.length - 1; i > 0; i--) {
        var char = input[i];
        var left = input[i - 1];
        lastDigits.push(i);
        if (left < char) {
            var chosenIndex;
            if (lastDigits.length) {
                chosenIndex = findFirstGreater(input, lastDigits, left);
                swap(input, chosenIndex, i - 1);
            } else {
                chosenIndex = i;
                swap(input, i, i - 1);
            }

            sort(input, i);
            var result = input.join("");
            console.log(result);
            return;


        }
    }

    console.log("no answer");

}

function sort(array, start) {
    var sorted = array.slice(start);
    sorted.sort(function(a, b) {
        if (a < b) return -1;
        else return 1;
    });

    var index = 0;
    for (var i = start; i < array.length; i++) {
        array[i] = sorted[index++];
    }
}

function swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

function findFirstGreater(input, lastDigits, target) {

    for (var i = 0; i < lastDigits.length; i++) {
        var index = lastDigits[i];
        var number = input[index];
        if (target < number) return index;
    }
}