/*
  05
  같은 문자가 연속으로 반복될 경우, 그 횟수를 사용해 문자열을 압축하는 메서드를 구현하라
  가령 압축해야할 문자열이 aabcccccccaaa라면 a2b1c8a3와 같이 압축되어야 한다.
  압축 결과로 만들어지는 문자열이 원래 문자열보다 짧아지지 않는 경우,
  이 메서드는 원래 문자열을 그대로 반환해야 한다
*/

// 9.1.16
var findCount = (string, milestone) => {
  if (string.length < 2) {
    return 1;
  }

  const alphabet = string[milestone];
  let count = 1;
  let nextChar = string[milestone + 1];

  while (nextChar === alphabet) {
    count++;
    nextChar = string[milestone + count]
  }

  return count;
}

var compress = (string) => {
  // input test
  if (!string) {
    return null;
  } else if (typeof string !== 'string') {
    console.error("Please insert valid string");
  }

  var count = 0;
  var milestone = 0;
  var alphabet;
  var result = "";

  while (milestone !== string.length) {
    alphabet = string[milestone];
    count = findCount(string, milestone);

    result += (alphabet + count);
    milestone += count;
  }

  if (result.length >= string.length) {
    return string;
  }

  return result;
}

compress("aabcccccccaaa");
compress("akddsfdddaaaaa");
compress("aaaabbccehs");