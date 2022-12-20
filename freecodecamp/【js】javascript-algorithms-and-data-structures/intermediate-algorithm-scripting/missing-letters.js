function fearNotLetter(str) {
  // delta = ascii_code - index (first character as a base)
  const delta = (ch, index) => ch.charCodeAt() - index;
  const base = delta(str[0], 0);
  // find the first index that not equal the base delta
  const ind = str.split("").findIndex((ch, index) =>  delta(ch, index) !== base);
  if (ind === -1) {
    return;
  } else {
    console.log(String.fromCharCode(base + ind));
    return String.fromCharCode(base + ind);
  }
}

fearNotLetter("abce");