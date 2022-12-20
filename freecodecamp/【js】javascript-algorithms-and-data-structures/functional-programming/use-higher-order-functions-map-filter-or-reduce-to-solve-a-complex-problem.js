const squareList = arr => {
  let newArr = arr.reduce((data, item) => {
    if (item > 0 && Number.isInteger(item)) {
      data.push(item * item);
    }
    return data;
  }, []);
  // 只修改这一行下面的代码
  return newArr;
  // 只修改这一行上面的代码
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);