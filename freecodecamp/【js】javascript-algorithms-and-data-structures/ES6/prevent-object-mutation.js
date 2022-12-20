function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // 只修改这一行下面的代码
  Object.freeze(MATH_CONSTANTS);

  // 只修改这一行上面的代码
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();