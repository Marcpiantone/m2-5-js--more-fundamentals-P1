// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (typeof arr[0] === "string" && typeof arr[1] === "number") {
    let sum = "";
    for (let i = 1; i <= arr[1]; i++) {
      sum = sum + arr[0];
    }
    return sum;
  } else return undefined;
}
// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["foo", 2]), "foofoo");
expect(repeat(["foo", 5]), "foofoofoofoofoo");
expect(repeat(["foo", 2 * 2]), "foofoofoofoo");
expect(
  repeat(["foo", 20]),
  "foofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoo"
);
expect(repeat([2, "foo"]), undefined);
expect(repeat(["foo", -5]), "");
expect(repeat(["foo", "foo"]), undefined);

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
