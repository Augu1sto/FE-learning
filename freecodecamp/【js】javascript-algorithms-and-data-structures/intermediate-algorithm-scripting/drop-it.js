function dropElements(arr, func) {
  let ind = arr.findIndex(item => func(item));
  return ind === -1 ? [] : arr.slice(ind);
}

dropElements([1, 2, 3], function(n) {return n < 3; });