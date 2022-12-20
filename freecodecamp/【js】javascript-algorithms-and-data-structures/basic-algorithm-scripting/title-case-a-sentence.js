function titleCase(str) {
  let arr = str.split(' ');
  let res = arr.map((item) => {
      return item[0].toUpperCase() + item.slice(1).toLowerCase();
    }).join(' ');
  return res;
}

titleCase("I'm a little tea pot");