function isRotated(str1, str2) {
  if (!str1 || !str2) {
    return false;
  }

  var first = str2[0];
  var str1_lastIndex = str1.length - 1;
  var lastEl = str1[str1_lastIndex];
  var str1_index = 0;

  while (true) {
    var matchIndex = findNextMatch(first, str1, str1_index);
    if (matchIndex === -1) {
      return false;
    }
    var diff = str1_lastIndex - matchIndex;
    if (str2[diff] === lastEl) {
      var target_index = diff + 1;
      break;
    } else {
      str1_index = matchIndex + 1;
    }
  }

  var rotated = rotate(str2, target_index);
  return isSubString(str1, rotated);
}

function findNextMatch(target, str, start) {
  for (var i = start; i < str.length; i++) {
    if (str[i] === target) {
      return i;
    }
  }
  return -1;
}

function rotate(str, idx) {
  var right = "";
  for (var i = idx; i < str.length; i++) {
    right += str[i];
  }
  for (i = 0; i < idx; i++) {
    right += str[i];
  }
  return right;
}

function isSubString(str1, str2) {
  return str1.substr(0) === str2;
}

var str1 = "lennny";
var str2 = "nylenn";
var answer = isRotated(str1, str2);
console.log(answer);
