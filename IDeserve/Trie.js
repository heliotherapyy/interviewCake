var Trie = function() {
  this.children = {};
  this.size = 0;
}

Trie.prototype.getNode = function(char) {
  return this.children[char];
}

Trie.prototype.setNode = function(char, node) {
  this.children[char] = node;
}

Trie.prototype.add = function(string, index) {
  if (!index) index = 0;

  this.size++;

  // base case
  if (index === string.length) return;

  var current = string[index];
  var child = this.getNode(current);

  if (!child) {
    child = new Trie();
    this.setNode(current, child);
  }

  // recurse
  child.add(string, index + 1);

}

Trie.prototype.findCount = function(string, index) {
  if (index === string.length) {
    return this.size;
  }

  var child = this.getNode(string[index]);
  if (!child) return 0;
  else return child.findCount(string, index + 1);
}

var trie = new Trie();
trie.add("lenny");
