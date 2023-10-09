function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
        if(array[i] + array[j] === target) {
            return true;
        }
    }
}
return false;


}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  This function, checkSumTarget, takes two parameters: an array of numbers (array) and a target number (target).

The function works by iterating over each element in the array with a pair of nested loops. The outer loop (for(let i = 0; i < array.length; i++)) iterates over each element in the array, and the inner loop (for(let j = i + 1; j < array.length; j++)) iterates over each subsequent element. This ensures that every unique pair of elements is considered.

Inside the inner loop, we check if the sum of the current pair of numbers equals the target (if(array[i] + array[j] === target)). If it does, we immediately return true and exit the function. This means that as soon as we find a pair of numbers that add up to the target, we stop checking any further.

If we finish checking all pairs of numbers and haven’t returned true, that means no pair of numbers adds up to the target. In this case, we return false
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
