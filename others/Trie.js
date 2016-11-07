function Trie() {
  this.children = {};
  this.size = 0;
}

Trie.prototype.getNode = function(char) {
  return this.children[char];
}

Trie.prototype.setNode = function(char, Node) {
  this.children[char] = Node;
}

Trie.prototype.add = function(string) {
  this.addHelper(string, 0);
}

Trie.prototype.addHelper = function(string, index) {
  this.size++;
  if (index === string.length) return;
  var child = this.getNode(string[index]);
  if (!child) {
    child = new Trie();
    this.setNode(string[index], child);
  }

  child.addHelper(string, index + 1);
}

Trie.prototype.findCount = function(string, index) {
  if (index === string.length) return this.size;
  var child = this.getNode(string[index]);
  if (!child) return 0;

  return child.findCount(string, index + 1);
}

var trie = new Trie();
debugger; trie.add("lenny");