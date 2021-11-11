function hasTargetSum(array, target) {
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (seenNumbers[complement]) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0 (n)
*/

/* 
  Add your pseudocode here:
  1. Takes two arguements 
  1.5. Make an empty object
  2. Iterate thru array 
  3. Make a variable that holds the number that complements the target number
  4. If statement that checks if it is in the object, if not it will add it
*/

/*
  Add written explanation of your solution here:
  Returns true or false based on if the 
  array has two numbers that equal to the target number

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
