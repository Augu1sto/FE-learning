let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // 修改这一行
let result = hello.replace(wsRegex, ''); // 修改这一行