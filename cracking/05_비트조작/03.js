function main(n) {
  var result = [];

  // returns an array of 32 binaries
  var binary = convert(n);
  var binaryArr = binary.split("");
  var leftMostOneIndex = findLeftMostOneIndex(binaryArr);

  result.push(findGreater(binaryArr.slice(), leftMostOneIndex));
  result.push(findSmaller(binaryArr.slice(), leftMostOneIndex));

  return result;
}

/*
  Helper functions
*/
function convert(n) {
  var binary = n.toString(2);
  var result = "";

  for (var i = 0; i < 32 - binary.length; i++) {
    result += "0";
  }

  result += binary;

  return result;
}

function findGreater(binaryArr, index) {
  var result = insertZero(binaryArr, index, "greater");

  return result;
}

function findSmaller(binaryArr, index) {
  var result = insertZero(binaryArr, index, "smaller")

  return result;
}

function findLeftMostOneIndex(binaryArr) {
  for (var i = 0; i < binaryArr.length; i++) {
    if (binaryArr[i] === '1') return i;
  }
}

function insertZero(binaryArr, index, flag) {
  if (flag === "smaller") {
    binaryArr[0] = 1;
    binaryArr[index] = 0;
  } else if(flag === "greater") {
    binaryArr[index] = 0;
    binaryArr[index - 1] = 1;
  }

  var binary = binaryArr.join("");

  return parseInt(binary, 2);
}

debugger; var arr = main(7);
console.log(arr);