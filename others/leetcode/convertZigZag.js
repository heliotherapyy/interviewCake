/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var parsed = parse(s, numRows);

    var numMain = count(parsed);
    var numSub = parsed.length - numMain;

    if (numSub > 0) {
      var width = numMain + numSub * parsed[1];
    } else {
      width = 1;
    }

    var matrix = createMatrix(width, n);

    // Fill in main
    var index = 0;
    for (var x = 0; x < width; x += parsed[1] + 1) {
      if (index > parsed.length - 1) break;
      var main = parsed[index];
      for (var y = 0; y < main.length; y++) {
        matrix[x][y] = main[i];
      }
      index += 2;
    }

    console.log(matrix);

    // Fill in sub

};

/*
index = 0
n = 4

abcdefg
abcd

*/

function parse(string, n) {
  var parsed = [];
  var index = 0;

  while (index < string.length) {
    var main = string.slice(index, index + n);
    var sub = string.slice(index + n, index + 2 * n - 2);
    if (main.length) parsed.push(main);
    if (sub.length) parsed.push(sub);
    index += (2 * n - 2);
  }

  console.log(parsed);
}

debugger; parse("PAYPALISHIRING", 4);