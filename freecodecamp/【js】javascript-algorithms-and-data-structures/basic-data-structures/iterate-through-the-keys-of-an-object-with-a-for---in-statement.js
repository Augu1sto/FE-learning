const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // 只修改这一行下面的代码
  let cnt = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      cnt++;
    }
  }
  return cnt;
  // 只修改这一行上面的代码
}

console.log(countOnline(users));