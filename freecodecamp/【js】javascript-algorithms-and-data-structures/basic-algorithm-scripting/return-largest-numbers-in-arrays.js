function largestOfFour(arr) {
  let res = arr.map((item) => Math.max(...item));
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);