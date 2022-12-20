function removeFirstTwo(list) {
  // 只修改这一行下面的代码
  const [a, b, ...shorterList] = list; // 修改这一行
  // 只修改这一行上面的代码
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);