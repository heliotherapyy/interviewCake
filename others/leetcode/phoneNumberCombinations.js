function phoneNumber(string) {
  var data = {};
  initilize(data);

  var combis = findCombis(data[string[0]], data[string[1]]);
  if (string.length > 2) {
    for (var i = 2; i < string.length; i++) {
      combis = findCombis(combis, data[string[i]]);
    }
  }

  return combis;
}

