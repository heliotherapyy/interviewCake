function main(str) {
  var cache = {};
  count(cache, str);
  console.log(cache);

  var result = "";
  for (var char in cache) {
    for (var i = 0; i < cache[char]; i++) {
      result += char;
    }
  }

  console.log(result);
  return result;
}

function count(cache, str) {
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    cache[char] = (!cache[char]) ? 1 : ++cache[char];
  }
}

var input = "lennydsajklsdafjlksaf";
main(input);