let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // 只修改这一行下面的代码
  return foods[scannedItem];
  // 只修改这一行上面的代码
}

console.log(checkInventory("apples"));