function translatePigLatin(str) {
  // get the index of the first vowel
  let firstVowel = str.search(/[aiueo]/i);
  // move the characters before the first vowel to the end
  if (firstVowel === 0) {
    return str + 'way';
  } else if (firstVowel === -1) {
    // hancel the situation with no vowel
    return str + 'ay';
  } else {
    return str.slice(firstVowel) + str.slice(0, firstVowel) + 'ay';
  }
  // ****** recommended solution ******
    // return str
    // .replace(/^[aeiou]\w*/, "$&way")
    // .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");