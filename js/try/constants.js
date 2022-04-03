const obj = {
    "key1":1,
    "key2":2
};

obj.key1 = 10;
console.log(obj); // { key1: 10, key2: 2 }

const arr = [1,2,3];
arr[2] = 20;
console.log(arr); // [ 1, 2, 20 ]