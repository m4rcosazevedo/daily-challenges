/*
Objective

In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.

Task

Complete the following functions in the editor below:

getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
The values returned by these functions are printed to stdout by locked stub code in the editor.
*/

// Task
function getArea(length, width) {
  return length * width
}
function getPerimeter(length, width) {
  return 2 * (length + width)
}

// input
  // 3
  // 4.5

// testing
console.time()
  console.log(getArea(3, 4.5))
  console.log(getPerimeter(3, 4.5))
console.timeEnd()

//output
  // 13.5
  // 15