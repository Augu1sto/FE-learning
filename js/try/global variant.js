function myLocalScope() {
    // 只修改这一行下面的代码
    myVar = 5;
    console.log('inside myLocalScope', myVar);
  }
myLocalScope();
  
  // 运行并检查控制台
  // 在 myLocalScope 之外，未定义 myVar
console.log('outside myLocalScope', myVar);