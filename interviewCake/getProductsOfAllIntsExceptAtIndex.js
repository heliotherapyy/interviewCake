var array = [1, 7, 3, 4];


// Examplify
// Dynamic Programming
// Pattern Matching
// Data Structure
// Simply & Generalize

/*
I am thinking of whether I can apply greedy algorithm approach or not
Is this question composed of optimal substructure?
That means, does this question get the optimal answer out of subproblems optimal answers?
Right now, I can't think of any patterns in terms of optimal structure from this question

Then, I would switch my approach into something else
Let's begin by finding a pattern while yielding what the questions wants me to do.

var array = [2, 7, 3, 4];

[1*7*3*4, 1*2*3*4, 1*2*7*4, 1*2*7*3]
[1*3*4*7, 1*2*3*4, 1*2*4*7, 1*2*3*7]

1734

7341
3417
4173

What's the pattern here...
I will first come up with the bruth-force algorithm and try to optimize from there
*/

// O(N^2)
function getProductsOfAllIntsExceptAtIndex(array) {
  var answer = [];

  // initialze every element with 1
  // [1,1,1,1]
  initialize(answer, array.length);
  var answer_index = 0;

  while (answer_index < answer.length) {
    for (var i = 0; i < array.length; i++) {
      if (answer_index === i) {
        continue;
      } else {
        answer[answer_index] *= array[i];
      }
    }
    answer_index++;
  }
}



// Improved Version
/*
1734

7341
3417
4173
*/

function improved(array) {
  var prev = new Array(array.length);
  var next = new Array(array.length);

  var prev_index = 0;
  addPrevious(prev, array);
  addNext(next, array);

  array = multiply(prev, next);
  console.log(array);
}

function addPrevious(prev, array) {
  var prevProduct = 1;
  for (var i = 0 ; i < array.length; i++) {
    prev[i] = prevProduct;
    prevProduct *= array[i];
  }
  console.log(prev);
}

function addNext(next, array) {
  var nextProduct = 1;
  for (var i = array.length -1; i >= 0; i--) {
    next[i] = nextProduct;
    nextProduct *= array[i];
  }
  console.log(next);
}

function multiply(array1, array2) {
  var products = [];
  for (var i = 0; i < array1.length; i++) {
    products[i] = array1[i] * array2[i];
  }
  return products;
}

improved([2,7,3,4]);



