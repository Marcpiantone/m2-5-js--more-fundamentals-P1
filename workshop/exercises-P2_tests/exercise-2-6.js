// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

//First try using if else

function calculator1(arr) {
  if (
    arr.length === 3 &&
    typeof arr[0] === "string" &&
    typeof arr[1] === "number" &&
    typeof arr[2] === "number"
  ) {
    if (arr[0] === "add") {
      sum = arr[1] + arr[2];
      return sum;
    }
    if (arr[0] === "sub") {
      sub = arr[1] + arr[2];
      return sub;
    }
    if (arr[0] === "mult") {
      mult = arr[1] * arr[2];
      return mult;
    } else return undefined;
  } else return undefined;
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator1(["mult", 2, 4]), 8);
expect(calculator1(["add", 2, 4]), 6);
expect(calculator1(["bus", 2, 4]), undefined);
expect(calculator1(["sub", "x", 4]), undefined);
expect(calculator1(["sub", 2]), undefined);
expect(calculator1(["sub", 2, 4, 4]), undefined);
expect(calculator1([1, "sub", 2]), undefined);
expect(calculator1(["add", "sub", 2]), undefined);

//Second try using switch

function calculator2(arr) {
  if (
    arr.length === 3 &&
    typeof arr[1] === "number" &&
    typeof arr[2] === "number"
  ) {
    const operation = arr[0];
    switch (operation) {
      case "add":
        return arr[1] + arr[2];
      case "sub":
        return arr[1] - arr[2];
      case "mult":
        return arr[1] * arr[2];
      default:
        return undefined;
    }
  } else return undefined;
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator2(["mult", 2, 4]), 8);
expect(calculator2(["add", 2, 4]), 6);
expect(calculator2(["bus", 2, 4]), undefined);
expect(calculator2(["sub", "x", 4]), undefined);
expect(calculator2(["sub", 2]), undefined);
expect(calculator2(["sub", 2, 4, 4]), undefined);
expect(calculator2([1, "sub", 2]), undefined);
expect(calculator2(["add", "sub", 2]), undefined);
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
