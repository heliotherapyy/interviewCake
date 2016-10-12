function AnimalShelter() {
  this.dogs = null;
  this.cats = null;
}

AnimalShelter.prototype.enqueue = function(breed) {
  if (breed === "dog") {
    (!this.dogs) ? this.dogs = new Node("dog") : append(this.dogs, "dog");
  } else {
    (!this.cats) ? this.cats = new Node("cat") : append(this.cats, "cat");
  }
}

AnimalShelter.prototype.dequeueAny = function() {
  var random = (Math.random() * 10) % 2;
  if (random === 0) {
    // dequeue dog
  } else {
    // dequeue cat
  }
}

AnimalShelter.prototype.dequeueDog = function() {
  // some code
}

AnimalShelter.prototype.dequeueCat = function() {
  // some code
}
