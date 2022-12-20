function popShift(arr) {
  let popped = arr.pop(); // 修改这一行
  let shifted = arr.shift(); // 修改这一行
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));