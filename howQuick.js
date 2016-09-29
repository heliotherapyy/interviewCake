/*
Suppose we had an array ↴ of nn integers in sorted order. How quickly could we check if a given integer is in the array?
*/

// USING BST
// LogN

function doesContain(array, num) {

  if (!array.legnth) {
    return false;
  }

  var middleIndex = Math.floor(array.length / 2);
  var middle = array[middleIndex];

  if (middle === num) {
    return true;
  } else if (middle > num) {
    return doesContain(array.slice(0, middleIndex), num);
  } else {
    return doesContain(array.slice(middleIndex + 1), num);
  }
}

var array = [1,2,3,4,5];
debugger;
console.log(doesContain(array, 3.2));