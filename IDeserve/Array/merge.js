var merge = function(arr1, arr2) {
  var merged = [];
  var i = j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
    else merged.push(arr2[j++]);
  }

  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);

  return merged;
}

var arr1 = [1,3,5,11,17];
var arr2 = [9,10,11,13,14];

var merged = merge(arr1, arr2);
console.log(merged);