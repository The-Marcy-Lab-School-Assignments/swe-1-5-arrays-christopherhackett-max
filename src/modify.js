const uppercaseAll = (...theArgs) => {
  let newArr = []
  for (let i = 0; i < theArgs.length; i++) {
    newArr.push(theArgs[i].toUpperCase())
  }
  return newArr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = [coordinates[0], coordinates[1]];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
