// 变量声明了，但没有赋值
var i;
console.log(i); // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
console.log(f()); // undefined

// 对象没有赋值的属性
var  o = new Object();
console.log(o.p) // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
console.log(f()); // undefined

console.log(Number(undefined));  // NaN