const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // 只修改这一行下面的代码
  const failureItems = arr.map((item) => `<li class="text-warning">${item}</li>`);
  // 只修改这一行上面的代码

  return failureItems;
}

const failuresList = makeList(result.failure);