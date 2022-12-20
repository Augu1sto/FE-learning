function findLongestWordLength(str) {
  let arr = str.split(" ");
  let maxLen = Math.max(...arr.map((item)=>item.length));
  return maxLen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");