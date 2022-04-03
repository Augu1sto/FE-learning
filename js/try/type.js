const i = 100;
const f = 0.3;
const s = "hello world";
const arr = [1,2,3];
const b = false;
const n = null;
const u = undefined;
const o = {
    "1":1,
    o2 :"2"
};
function fn(){
    return 1000;
}

const i0 = Number(100);
const i1 = new Number(100);

// typeof
console.log("---typeof---")
console.log(`${i}:\t ${typeof i}`); // number
console.log(`${i0}:\t ${typeof i0}`); // number
console.log(`${i1}:\t ${typeof i1}`); // object
console.log(`${f}:\t ${typeof f}`); // number
console.log(`${s}:\t ${typeof s}`); // string
console.log(`${arr}:\t ${typeof arr}`); // object
console.log(`${b}:\t ${typeof b}`); // boolean
console.log(`${n}:\t ${typeof n}`); // object
console.log(`${u}:\t ${typeof u}`); // undefined
console.log(`${o}:\t ${typeof o}`); // object
console.log(`${fn}:\t ${typeof fn}`); // function
console.log(`${NaN}:\t ${typeof NaN}`); // number

// instanceof 
console.log("---instanceof---")
// console.log(`${i instanceof number}`); number is not defined
console.log(`${i instanceof Number}`); // false
console.log(`${s instanceof String}`); // false
console.log(`${i0 instanceof Number}`); // false
console.log(`${i1 instanceof Number}`); // true
console.log(`${o instanceof Object}`); // true
console.log(`${arr instanceof Array}`); // true
console.log(`${fn instanceof Function}`); // true

// prototype
console.log("---prototype---")
console.log(`${Object.prototype.toString.call(i)}`); // [object Number]
console.log(`${Object.prototype.toString.call(f)}`); // [object Number]
console.log(`${Object.prototype.toString.call(s)}`); // [object String]
console.log(`${Object.prototype.toString.call(arr)}`); // [object Array]
console.log(`${Object.prototype.toString.call(b)}`); // [object Boolean]
console.log(`${Object.prototype.toString.call(n)}`); // [object Null]
console.log(`${Object.prototype.toString.call(u)}`); // [object Undefined]
console.log(`${Object.prototype.toString.call(o)}`); // [object Object]
console.log(`${Object.prototype.toString.call(fn)}`); // [object Function]
console.log(`${Object.prototype.toString.call(NaN)}`); // [object Number]
