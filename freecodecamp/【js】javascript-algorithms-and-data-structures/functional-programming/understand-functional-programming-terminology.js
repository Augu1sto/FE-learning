// 函数返回表示“一杯绿茶（green tea）”的字符串
const prepareGreenTea = () => 'greenTea';

// 函数返回表示“一杯红茶（black tea）”的字符串
const prepareBlackTea = () => 'blackTea';

/*
有一个函数（代表茶的种类）和需要几杯茶，下面的函数返回一个数组，包含字符串（每个字符串表示一杯特别种类的茶）。
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// 只修改这一行下面的代码
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// 只修改这一行上面的代码

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);