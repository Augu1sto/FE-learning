// var f = function (a,b) {
//     console.log(1);
// }

// console.log(f.length);

function outside(x) {
    function inside(y) {
        console.log(y);
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); // 可以这样想：给一个函数，使它的值加3
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8