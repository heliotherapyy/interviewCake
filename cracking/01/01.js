/*
  01
  문자열에 포함된 문자들이 전부 유일한지를 검사하는 알고리즘을 구현하라.
  다른 자료구조를 사용할 수 없는 상황이라면 어떻게 하겠는가?
*/
// 9.1.16
const foo = "aaabbccdddeeffggg";
const bar = "abcdefghi";

const isCharacterUnique = (string) => {
  if (!string) {
    return false;
  } else if (typeof string !== 'string') {
    return false;
  }

  let cache = {};
  for (let i = 0; i < string.length; i++) {
    if (!cache[string[i]]) {
      cache[string[i]] = true;
    } else {
      return false;
    }
  }

  return true;
}

isCharacterUnique(foo);
isCharacterUnique(bar);