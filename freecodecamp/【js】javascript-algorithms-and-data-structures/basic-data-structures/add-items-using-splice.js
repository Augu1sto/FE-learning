function htmlColorNames(arr) {
  // 只修改这一行下面的代码
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  // 只修改这一行上面的代码
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));