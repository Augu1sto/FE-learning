function filteredArray(arr, elem) {
  let newArr = [];
  // 只修改这一行下面的代码
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].indexOf(elem) === -1) {
        newArr.push(arr[i]);
    }
  }
  // 只修改这一行上面的代码
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));