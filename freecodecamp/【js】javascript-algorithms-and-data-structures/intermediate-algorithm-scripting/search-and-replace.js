function myReplace(str, before, after) {
  // 'A'<...'Z'<'a'<...<'z'
  let af = before[0] < 'a' ? after[0].toUpperCase() + after.slice(1) : after[0].toLowerCase() + after.slice(1);
  return str.replace(before, af);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");