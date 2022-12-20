let username = "JackOfAllTrades";
let userCheck = /^[a-z]+\d\d+$|^[a-z][a-z]+\d*$/i; // 修改这一行
let result = userCheck.test(username);