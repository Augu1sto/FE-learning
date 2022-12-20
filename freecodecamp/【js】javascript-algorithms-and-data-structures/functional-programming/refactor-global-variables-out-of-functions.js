// 全局变量
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// 修改这行下面的代码
function add(list, bookName) {
  return [...list, bookName];
  // 修改这行上面的代码
}

// 修改这行下面的代码
function remove(list, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    return list.filter(book => book !== bookName);
    // 修改这行上面的代码
    }
}