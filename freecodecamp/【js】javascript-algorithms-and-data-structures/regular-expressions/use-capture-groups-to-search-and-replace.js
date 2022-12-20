let str = "one two three";
let fixRegex = /([a-zA-Z]+)\s([a-zA-Z]+)\s([a-zA-Z]+)/; // 修改这一行
let replaceText = "$3 $2 $1"; // 修改这一行
let result = str.replace(fixRegex, replaceText);