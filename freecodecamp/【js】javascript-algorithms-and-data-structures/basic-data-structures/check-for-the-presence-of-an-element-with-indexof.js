function quickCheck(arr, elem) {
  // 只修改这一行下面的代码
  if (arr.indexOf(elem) === -1) {
    return false;
  } else {
    return true;
  }
  // 只修改这一行上面的代码
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));