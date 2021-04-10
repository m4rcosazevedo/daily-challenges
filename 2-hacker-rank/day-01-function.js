/*
Objective
Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task
Implement a function named factorial that has one parameter: an integer, n.
It must return the value of n! (i.e., n factorial).
*/

// Task
const factorial = n => n > 1 ? n * factorial(--n) : 1;

// input
  // 4

// testing
console.time()
  console.log('hmm', factorial(4))
console.timeEnd()

//output
  // 24