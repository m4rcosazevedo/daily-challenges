// Input 
  // 12
  // 4.32
  // is the best place to learn and practice coding!

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    console.log(firstInteger + (+secondInteger));
    console.log(firstDecimal + (+secondDecimal));
    console.log(firstString + secondString);
}

// testing
console.time()
  performOperation(12, 4.32, 'is the best place to learn and practice coding!')
console.timeEnd()

//output
  // 16
  // 8.32
  // HackerRank is the best place to learn and practice coding!