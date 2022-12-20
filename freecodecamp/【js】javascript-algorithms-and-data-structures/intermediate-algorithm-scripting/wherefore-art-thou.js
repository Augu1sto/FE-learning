function whatIsInAName(collection, source) {
  return collection.filter(item => {
    return Object.keys(source).every(key => item.hasOwnProperty(key) && item[key] === source[key]);
  })
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });