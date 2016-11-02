function isSuperBalanced(root) {
  var minDepth = findFirstLeafDepth(root);
  var maxDepth = findLastLeafDepth(root);

  var diff = Math.abs(maxDepth - minDepth);


}