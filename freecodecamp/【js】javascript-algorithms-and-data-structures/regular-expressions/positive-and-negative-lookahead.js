let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d\d\w*)/; // 修改这一行
let result = pwRegex.test(sampleWord);