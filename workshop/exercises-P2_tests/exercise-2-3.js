// Exercise 2-3
// ------------

// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  let sum = input[0] + input[1];
  if (typeof sum === "number") {
    return sum;
  } else return undefined;
}

console.log(sumDigits([5, 3]));

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits(["x", 2]), undefined);
expect(sumDigits(["text"]), undefined);
expect(sumDigits([1000, "w"]), undefined);
expect(sumDigits([1000, 2]), 1002);
expect(sumDigits([11, 3]), 14);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
