// example from 《Javasctipt权威指南》P188
let scope = "global scope";

function checkscope() {
    let scope = "local scope";
    function f() {return scope};
    return f;
}

let s = checkscope()();
console.log(s); // local scope