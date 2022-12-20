let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // 只修改这一行下面的代码
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // 只修改这一行上面的代码
}

console.log(addFriend(user, 'Pete'));