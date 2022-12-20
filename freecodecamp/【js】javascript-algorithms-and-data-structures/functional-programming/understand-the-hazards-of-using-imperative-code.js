// tabs 是在窗口中打开的每个站点的 title 的数组
const Window = function(tabs) {
  this.tabs = tabs; // 我们记录对象内部的数组
};

// 当你将两个窗口合并为一个窗口时
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// 当你在最后打开一个选项卡时
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // 我们现在打开一个新的选项卡
  return this;
};

// 当你关闭一个选项卡时
Window.prototype.tabClose = function(index) {

  // 只修改这一行下面的代码

  const tabsBeforeIndex = this.tabs.slice(0, index); // 点击之前获取 tabs
  const tabsAfterIndex = this.tabs.slice(index + 1); // 点击之后获取 tabs

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // 将它们合并起来

  // 只修改这一行上面的代码

  return this;
 };

// 我们创建三个浏览器窗口
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // 你的邮箱、Google Drive 和其他工作地点
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // 社交网站
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // 娱乐网站

// 现在执行打开选项卡，关闭选项卡和其他操作
const finalTabs = socialWindow
  .tabOpen() // 打开一个新的选项卡，显示猫的图片
  .join(videoWindow.tabClose(2)) // 关闭视频窗口的第三个选项卡，并合并
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);