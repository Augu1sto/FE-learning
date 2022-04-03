/**
 * 例子3
 */
var x = 12
a = function(){
    console.log(x); //undefined
    console.log(x+2);//NaN
    var x = 10;
}

a()