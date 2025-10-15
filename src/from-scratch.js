const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
};

const reverseString = (string) => {
  const arr = string.split('')
  const reversed = arr.reverse()
  const joined = reversed.join("")
  return joined
};

const newArrayFullOf = (value, numOfValue) => {
  const arr = new Array(numOfValue)
  arr.fill(value)
  return arr
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(arr.length / 2, 0, value)
};

const deleteFromMiddle = (arr) => {
  arr.splice(arr.length / 2, 1)
};

const isRightIndex = (arr, value, index) => {
  if (arr[index] === value) {
    return true
  } else {
    return false
  }
};

const roundAllNumsDown = (arr) => {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(Math.floor(arr[i]))
  }
  return newArray
};

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = []
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArr.push(arrOfCoords[i][1])
  }
  return newArr
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
