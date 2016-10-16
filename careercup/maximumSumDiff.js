var array = [2, -1, -2, 1, -4, 8];

/*
  [-1, -2, 1, -4] = -6
  [2. 8] = 10

  [-1 -2 -4] = -7
  [2 8 1] = 11

*/

function main(array) {
  var smalls = [];
  var bigs = [];

  for (var i = 0; i < array.length; i++) {
    var value = array[i];
    (value >= 0) ? bigs.push(value) : smalls.push(value);
  }

  console.log(smalls);
  console.log(bigs);
  return [smalls, bigs];
}

main(array);