function Stream() {
  this.cache = {};
  this.cache2 = new BST();
  this.cache3 = {};
}

Stream.prototype.track = function(num) {
  update1(this.cache1, num);
  update2(this.cache2, num, cache3, cache1);
  update3(cache3, num);
}

Stream.prototype.getRank = function(num) {
  return this.cache3[num];
}

function update1(cache, num) {
  if (!cache[num]) cache[num] = 1;
  else cache[num]++;
}

function update2(BST, num, cache3, cache1) {
  BST.insert(num);
  var node = findNextGreatest(BST, num);
  if (node) {
    if (node.data === num) cache3[num]++;
    else cache3[num] = node.rank + 1;
  } else {
    cache[num] = 0;
  }
}

function findNextGreatest(BST, target) {
  var parent =
}