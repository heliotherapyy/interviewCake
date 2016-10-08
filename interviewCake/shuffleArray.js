var array = [1,2,3,4,5,6,7,8,9,10];

function shuffle(array) {
  for (var i = 0 ; i < array.length; i++) {
    var index = getRandom(0, 10);
    swap(array, i, index);
  }
  console.log(array);
}

function getRandom(floor, ceiling) {
  var random = Math.floor(Math.random() * 10) % 10
  return random;
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

debugger; shuffle(array);


