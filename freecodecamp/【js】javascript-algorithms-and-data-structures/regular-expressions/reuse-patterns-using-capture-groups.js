let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // 修改这一行
let result = reRegex.test(repeatNum);