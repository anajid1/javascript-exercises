const removeFromArray = function(arr, ...removeArr) {
  let newArr = [];

  for (const i of arr) {
    if (!removeArr.includes(i)) {
      newArr.push(i);
    }
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
