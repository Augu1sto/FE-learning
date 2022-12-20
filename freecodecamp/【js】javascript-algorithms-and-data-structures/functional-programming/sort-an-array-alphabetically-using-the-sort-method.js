function alphabeticalOrder(arr) {
  // 只修改这一行下面的代码
  arr.sort((a, b) => {
    return a < b ? -1 : 1;
  });
  return arr
  // 只修改这一行上面的代码
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);