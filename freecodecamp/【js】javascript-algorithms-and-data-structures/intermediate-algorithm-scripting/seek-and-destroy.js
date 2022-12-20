function destroyer() {
  let [arr, ...values] = [...arguments];
  return arr.filter(item => values.indexOf(item) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);