const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // 只修改这一行下面的代码
  let newArr = arr.slice();
  return newArr.sort((a, b) => a - b);
  // 只修改这一行上面的代码
}

nonMutatingSort(globalArray);