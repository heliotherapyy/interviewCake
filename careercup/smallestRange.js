var array1 = [4,10, 15, 24, 26];
var array2 = [0,9,12,20];
var array3 = [5,18,22,30];

function findSmallestRange(array1, array2, array3) {
  var sorted = [];

  // sort by value
  // when storing, convert the primitive number into a form of
  // object with value & from

  while (true) {
    var i = 0;
    var j = 0;
    var k = 0;
  }
}

function sort(array1, array2, array3) {
  var result [];
  var i = 0, j = 0, k = 0;
  while (true) {
    var smallest = findSmallest(array1[i], array2[j], array3[k]);
    if (smallest === array1[i]) {
      result.push({value: array1[i], from: 1});
      i++;
      if (i === array1.length) {
        i = array1.length - 1;
      }
    } else if (smallest === array2[j]) {
      j++;
      result.push({value: array2[j], from: 2});
    } else {
      k++;
      result.push({value: array3[k], from: 3});
    }
  }

}

