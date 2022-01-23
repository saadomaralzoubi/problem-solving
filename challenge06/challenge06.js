"use strict";

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const sumNums = (arr) => {
  let Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) == true) {
      Sum = Sum + arr[i];
    }
  }
  return Sum;
};

const reverseArray = (arr) => {
  let newArray = [];
  for (i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return console.log(newArray);
};

module.exports = { findMax, sumNums, reverseArray };
