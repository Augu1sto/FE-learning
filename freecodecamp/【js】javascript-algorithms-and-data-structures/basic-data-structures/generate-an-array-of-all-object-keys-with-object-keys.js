let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // 只修改这一行下面的代码
  return Object.keys(obj);
  // 只修改这一行上面的代码
}

console.log(getArrayOfUsers(users));