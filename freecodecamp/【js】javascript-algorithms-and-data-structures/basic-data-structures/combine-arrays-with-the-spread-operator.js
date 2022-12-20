function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // 修改这一行
  return sentence;
}

console.log(spreadOut());