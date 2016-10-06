/*
  02
  널 문자로 끝나는 문자열을 뒤집는 reverse(char* str) 함수를
  C나 C++로 구현하라
*/
// 9.1.16
const foo = "abcdefg";

var reverse = (string) => {
  var result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

reverse(foo);