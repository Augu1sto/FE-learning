function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b);
  let n = arr.find((item) => item >= num);
  return n!=undefined ? arr.indexOf(n) : arr.length;
}

// [best solution]
// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }

getIndexToIns([40, 60], 50);