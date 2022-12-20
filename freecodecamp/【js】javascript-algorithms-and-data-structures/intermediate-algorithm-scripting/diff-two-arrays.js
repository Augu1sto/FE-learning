function diffArray(arr1, arr2) {
  const findDiff = (a1, a2) => {
    return a1.filter(item => a2.indexOf(item) === -1);
  };
  return [...findDiff(arr1, arr2), ...findDiff(arr2, arr1)];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);