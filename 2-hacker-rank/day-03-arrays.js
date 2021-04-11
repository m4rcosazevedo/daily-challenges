/*
Objective
In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Function Description
Complete the getSecondLargest function in the editor below.
getSecondLargest has the following parameters:

int nums[n]: an array of integers
 
Returns
int: the second largest number in nums

Input Format

The first line contains an integer, n, the size of the nums array.
The second line contains n space-separated numbers that describe the elements in nums.

containts
1 <= n <= 10
0 <= nums <= 100, where numns is the number at index i
the number in nums mayu not be distict
*/

// Task
function getSecondLargest(nums) {
    return [...new Set(nums)].sort( (a,b) => b - a)[1]
}

// input
  // [2,3,6,6,5]

// testing
console.time()
  console.log(getSecondLargest([2,3,6,6,5]))
console.timeEnd()

//output
  // 5