// Assume duplicates appear only twice

function findUnique(arr) {
  if (!arr.length) {
    return null;
  }

  var cache = {};

  arr.forEach(function(id) {
    if (!cache[id]) {
      cache[id] = 1;
    } else {
      cache[id]++;
    }
  });

  for (var id in cache) {
    if (cache[id] === 1) {
      return id;
    }
  }
}