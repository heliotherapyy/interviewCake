// Assuming elements in array are unique
function findRotation(array, start, end) {
  while (start < end) {
    var mid_idx = Math.floor((start + end) / 2);
    var middle = array[mid_idx];
    var first = array[start];
    var last = array[end];

    /*
      The middle is in left or right side of the array
      everything in left side is greater than right side
    */
    if (first < middle && middle < last){
      // We are in the right side
      return start;
    } else {
      // We are in the left side;
      // mid_idx가 아닌 이유는 그렇게 해야지 return start 가 작동하기 때문이다
      start = mid_idx;
    }
  }

  return -1;
}

var array = [6,7,8,9,10,11,12,13,14,1,2,3,4,5];
debugger; var answer = findRotation(array, 0, array.length - 1);
console.log(answer);