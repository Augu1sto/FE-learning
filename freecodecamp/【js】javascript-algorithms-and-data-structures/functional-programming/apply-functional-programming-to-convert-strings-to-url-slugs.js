// 只修改这一行下面的代码
function urlSlug(title) {
  return title.toLowerCase().split(/\s/).filter(Boolean).join('-');

}
// 只修改这一行上面的代码
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");