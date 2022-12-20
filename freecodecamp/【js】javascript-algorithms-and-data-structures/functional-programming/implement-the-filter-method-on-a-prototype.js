Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // 只修改这一行下面的代码
  this.forEach((item, index) => {
    if (callback(item, index, this)) {
      newArray.push(item);
    }
  })
  // 只修改这一行上面的代码
  return newArray;
};