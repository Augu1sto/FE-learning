function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  return str2.split("").every((ch) => str1.indexOf(ch)!==-1);
}

mutation(["hello", "hey"]);