function sort(array, start, end) {
  if (start < end) {
    var mid = getPartition(array, start, end);
    sort(array,start, mid - 1);
    sort(array, mid + 1, end);
  }

  return array;
}

function getPartition(array, start, end) {
  var pivot = array[start];

  var left = start + 1;
  var right = end;

  while (left < right) {
    while (!compare(array[left], pivot)) {
      left++;
    }

    while (compare(array[right], pivot)) {
      right--;
    }

    if (left < right) {
      swap(array, left, right);
    } else {
      break;
    }
  }

  if (compare(pivot, array[right])) {
    swap(array, start, right);
  }

  return right;
}

/*
  Returns true str1 is greater than str2
          false when str1 is smaller or equal
*/
function compare(str1, str2) {
  var object1, object2;
  object1 = createObject(str1);
  object2 = createObject(str2);

  var flag = compareObject(object1, object2);
  if (flag) {
    return false;
  } else {
    if (str1 > str2) {
      return true;
    } else {
      return false;
    }
  }
}

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

/*
  {
    char1 : # of apperances,
    char2 : # of appearnces
            ...
  }
*/
function createObject(str) {
  var object = {};
  for (var i = 0 ; i < str.length; i++) {
    var char = str[i];
    if (!object[char]) {
      object[char] = 1;
    } else {
      object[char]++;
    }
  }
  return object;
}

// (Object, Object) => Boolean
function compareObject(obj1, obj2) {
  for (var char in obj1) {
    var count = obj1[char];
    if (count !== obj2[char]) {
      return false;
    }
  }

  for (var char in obj2) {
    var count = obj2[char];
    if (count !== obj1[char]) {
      return false;
    }
  }

  return true;
}

var array = ["abc","bcd","cde","cab"];
debugger; var answer = sort(array, 0, array.length - 1);
console.log(answer);
