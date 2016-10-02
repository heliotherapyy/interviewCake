var flightTime = 180;
var array = [123,53634,234,12,23,6,8,57];
var array2 = [90];

function getRemainder(total, num) {
  return total - num;
}

function canEntertain(total, array) {
  var cache = {};
  var flag = false;

  for (var i = 0 ; i < array.length; i++) {
    cache[array[i]] = i;
    var remainder = getRemainder(total, array[i]);

    var cached = cache[remainder];
    if (!cached) {
      continue;
    } else {
      if (cached !== i) {
        return true;
      }
    }
  }
  return false;
}

var answer = canEntertain(flightTime, array2);
console.log(answer);


/*
  Check를 한 다음에 cache에 원래 값을 넣으면 되는 것이다...
*/
