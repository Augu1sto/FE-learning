function mixedNumbers(arr) {
  // 只修改这一行下面的代码
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  // 只修改这一行上面的代码
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));