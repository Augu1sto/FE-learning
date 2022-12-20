// 只修改这一行下面的代码
class Thermostat {
  constructor(fah) {
    this._fah = fah;
  }
  get temperature() {
    let cel = 5 / 9 * (this._fah - 32);
    return cel;
  }
  set temperature(cel) {
    this._fah = cel * 9.0 / 5 + 32;
  }
}
// 只修改这一行上面的代码

const thermos = new Thermostat(76); // 设置为华氏刻度
let temp = thermos.temperature; // 24.44 摄氏度
thermos.temperature = 26;
temp = thermos.temperature; // 26 摄氏度