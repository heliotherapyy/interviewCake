var string = 'Add milk and eggs, then add flour and sugar.';

function wordCloud(string) {
  var cloud = {};

  var array = string.split(" ");
  for (var i = 0 ; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }

  array.forEach(function(word) {
    (!cloud[word]) ? cloud[word] = 1 : cloud[word]++;
  })

  console.log(cloud);
}

wordCloud(string);