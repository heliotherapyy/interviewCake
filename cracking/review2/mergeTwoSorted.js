function merge(arr1, arr2) {
  var i = findLast(arr1);
  var j = arr2.length - 1;
  var k = arr1.length - 1;

  while (i >= 0 && j >= 0) {
    if (arr1[i] < arr2[j]) arr1[k--] = arr2[j--];
    else arr1[k--] = arr1[i--];
  }

  while (j >= 0 && k >= 0) {
    arr1[k--] = arr2[j--];
  }

  console.log(arr1);
}

function findLast(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i]) return i - 1;
  }
}

var arr1 = [1,3,5, null, null, null];
var arr2 = [5,7,25];

merge(arr1, arr2);