"use strict";
// 1
const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// 2
const sumNums = (arr) => {
  let Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) == true) {
      Sum = Sum + arr[i];
    }
  }
  return Sum;
};

// 3
const reverseArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  console.log(newArray);
  return newArray;
};

module.exports = { findMax, sumNums, reverseArray };
