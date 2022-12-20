let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // 修改这一行
let result = movieName.match(noNumRegex).length;