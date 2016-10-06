/*
  03
  문자열 두 개를 입력받아 그 중 하나가 다른 하나의 순열인지 판별하는
  메서드를 작성하라
*/
// 9.1.16
var foo = "abcdefg"
var bar = "lennykimabcdefgkim";

// Helper Functions
const findFirstMatch = (char, string, idx) => {
  let index;

  for (let i = idx; i < string.length; i++) {
    if (char === string[i]) {
      index = i;
      return index;
    }
  }

  return null;
}

const isEqual = (string1, string2, idx) => {
  const length = string1.length;
  return string1 === string2.substring(idx, idx + length);
}


// Main Function
const isPartOf = (string1, string2) => {
  if (!string1 || !string2) {
    return false;
  }

  // Assume string2 is longer than string1
  var firstIndex = findFirstMatch(string1[0], string2, 0);

  while (firstIndex) {
    if (isEqual(string1, string2, firstIndex)) {
      return true;
    } else {
      firstIndex = findFirstMatch(string[0], string2, firstIndex + 1);
    }
  }

  return false;
}

isPartOf(foo, bar);
