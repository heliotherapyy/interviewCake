function reverseString(string) {
  var array = string.split("");
  reverseArray(array, 0, array.length -1);
  return array.join("");
}

function reverseArray(array, start, end) {

  while (start < end) {
    swap(array, start, end);
    start++;
    end--;
  }
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

var answer = reverseString("lennykim");
console.log(answer);