function AngryBirdSort(array, highest) {
  var storage = new Array(highest + 1);

  for (var i = 1; i <= array.length; i++) {
    var index = array[i - 1];
    if (!storage[index]) {
      storage[index] = 1;
    } else {
      storage[index] += 1;
    }
  }

  var sorted = [];
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] >= 1) {
      for (var j = 0; j < storage[i]; j++) {
        sorted.push(i);
      }
    }
  }

  console.log(sorted);
}

var unsortedScores = [37, 89, 41, 65, 91, 53, 53, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

debugger; AngryBirdSort(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [37, 41, 53, 65, 89, 91]