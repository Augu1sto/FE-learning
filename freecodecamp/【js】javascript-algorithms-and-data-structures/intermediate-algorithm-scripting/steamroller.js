function steamrollArray(arr) {
  return arr.reduce((flatenArr, item) => {
    if(!Array.isArray(item)) {
      flatenArr.push(item);
    } else {
      flatenArr.push(...steamrollArray(item));
    }
    return flatenArr;
  }, []);
}

// other solution
// function steamrollArray(arr) {
//   const flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

steamrollArray([1, [2], [3, [[4]]]]);