/*
Objective
In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

Task
Comkplete the getGrade(score) function in the editor.
It has one parameter: an integfer, socre, denoting the number of points julia earned on an exam.
It must return the letter corresponding to her grade according to the following rules:

if (25 < score <= 30, then grade = A
if (20 < score <= 25, then grade = B
if (15 < score <= 20, then grade = C
if (10 < score <= 15, then grade = D
if (5 < score <= 10, then grade = E
if (0 <= score <= 5, then grade = F

*/

// Task
const getGrade(score) {
	return 'FFEDCBA'[Math.ceil(score/5.0)]
}

// input
  // 11

// testing
console.time()
  console.loggetGrade(11))
console.timeEnd()

//output
  // D