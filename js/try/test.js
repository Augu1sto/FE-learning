function fn(){
    var arr = []
    for(var i=0;i<3;i++){ // var改成let的话，就是0+1
        arr.push(function(){
            console.log(i);
            return i;
        })
    }
    return arr;
}
let f = fn()

function tn(){
    return [0,1,2];
}
let t=tn();
console.log( f[0]() + f[1]() ) // 调用时才去算闭包里面的东西，，因此是3+3