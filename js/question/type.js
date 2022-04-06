// 实现判断类型的函数
function type(obj){
    var s = Object.prototype.toString.call(obj); // [object xxxx]
    tt = s.split(' ')[1];
    t = tt.slice(0,tt.length-1);
    // 写成正则表达式：s.match(/\[object (.*?)\]/)[1].toLowerCase();
    console.log(t);
}

type(123);
type('hello world');
type({a:1,b:2});
type([1,2,3]);
type(null);
type(undefined);


// 判断是否是某个类型
['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isNumber(NaN);//true