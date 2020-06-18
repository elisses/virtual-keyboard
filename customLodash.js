const _ = require('lodash').mixin({
  chunck: (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (el, index) => array.slice(index * size, index * size + size)),
  compact: (array) => array.filter((el) => Boolean(el) === true),
  drop: (array, size = 1) => array.slice(size, array.length),
  zip: (...array) => array[0].map((el, c) => array.map((r) => r[c])), // trasnpose es6
  take: (arr, size = 1) => {
    if (arr.length > size) {
      arr.length = size;
    }
    return arr;
  },

  dropWhile: (arr, condition) => {
    const newArr = [];
    arr.forEach((item) => {
      if (condition(item)) {
        return newArr;
      }
      newArr.push(item);
    });
    return newArr;
  },
  filter: (arr, condition) => {
    const newArr = [];
    arr.forEach((item) => {
      if (condition(item)) {
        return newArr;
      }
      newArr.push(item);
    });
    return newArr;
  },

});

module.exports = _;
