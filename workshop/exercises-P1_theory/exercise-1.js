// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));

let sum = 0;
let num = 3;
const func1_1 = function (num) {
  //First we will substract 1 to our num (sum = 2)
  sum = num - 1;
  //We then square that result (sum = 4)
  sum = sum * sum;
  //And we substract 1 from that previous result (sum = 3)
  sum = sum - 1;
  return sum;
};
console.log(`Answer 1-1 ${func1_1(3)}`);

// 1-2
decrement(decrement(square(square(3))));

const func1_2 = function (num) {
  //We first square our num (sum = 9)
  sum = num * num;
  //Then square that result (sum = 81)
  sum = sum * sum;
  //And substract 1 to our result (sum = 80)
  sum = sum - 1;
  return sum;
};
console.log(`Answer 1-2 ${func1_2(3)}`);

// 1-3
duplicateString(reverseString("hello"));

//First we take "hello" and reverse it in "olleh"
//Then it duplicates and concatenate itself "olleholleh"

console.log(
  `Answer 1-3 ${duplicateString(reverseString("hello"))} is olleholleh`
);

// 1-4
reverseString(duplicateString(duplicateString("foo")));

//We first take our string and duplicate it / concatenate to itself ("foofoo")
//Then we take this result and duplicate it / concatenate to itself ("foofoofoofoo")
//And we take the previous result and reverse it ("oofoofoofoof")

console.log(
  `Answer 1-4 ${reverseString(
    duplicateString(duplicateString("foo"))
  )} is oofoofoofoof`
);
