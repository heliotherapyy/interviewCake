function palindrome(string) {
  var length = string.length;
  var flag = (length % 2) === 0;

  var cache = {};
  /*
    {
      char: # of appearances
      ...
    }
  */
  findDuplicates(cache, string);
  var pairCount = countPairs(cache);
  if (flag) {
    // There should be N sets of duplicates
    return (2 * pairCount === length);
  } else {
    // There should be N sets of duplicates + one unique number
    return (2 * pairCount + 1 === length);
  }
}

// (Object, String) => Object
function findDuplicates(object, string) {
  var firstChar = string[0];
  object[firstChar] = 1;

  for (var i = 1; i < string.length; i++) {
    var char = string[i];

    if (!object[char]) {
      object[char] = 1;
    } else {
      object[char]++;
    }
  }

  console.log(object);
}

function countPairs(object) {
  var count = 0;

  for (var char in object) {
    var freq = object[char];
    count += divideBy2(freq, 2);
  }

  return count;
}

function divideBy2(num, divider) {
  var count = 0;
  while (num > 0) {
    num -= divider;
    if (num >= 0) count++;
  }

  return count;
}

var a = "civic" // true
var b = "ivicc" // true
var c = "civil" // false
var d = "livci" // false

console.log(palindrome(d));

function palindrome2(string) {
  var object = {};

  for (var i = 0 ; i < string.length; i++) {
    var char = string[i];

    if (!object[char]) {

    }
  }
}