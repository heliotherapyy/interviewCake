function main(arr) {
  var slow = 0;
  var fast = 0;

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while(slow !== fast)

  var find = 0;

  while (find !== slow) {
    slow = arr[slow];
    find = arr[find];
  }

  return find;
}

arr = [1,2,3,4,5,5];
var result = main(arr);
console.log(result);