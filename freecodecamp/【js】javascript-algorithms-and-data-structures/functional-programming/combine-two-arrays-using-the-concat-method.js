function nonMutatingConcat(original, attach) {
  // 只修改这一行下面的代码

  return original.concat(attach);
  // 只修改这一行上面的代码
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);