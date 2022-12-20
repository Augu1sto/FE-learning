function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while ( arr.length > size ) {
    newArr.push(arr.splice(0, size));
  }
  newArr.push(arr);
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);