function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // 只修改这一行下面的代码
    newArr.push([...arr]);
    // 只修改这一行上面的代码
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));