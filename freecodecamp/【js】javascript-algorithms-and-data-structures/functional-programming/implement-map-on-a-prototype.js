Array.prototype.myMap = function(callback) {
  const newArray = [];
  // 只修改这一行下面的代码
  this.forEach((item, index) => {
    newArray.push(callback(item, index, this));
  });
  // 只修改这一行上面的代码
  return newArray;
};