a = [3,2,,1]
b = [3,2,undefined,1]
console.log('---- for...in ----');
for (const i in a) {
    console.log(i); // index
}

console.log('---- forEach ----');
a.forEach(element => {
    console.log(element);
});

console.log('---- Object.keys ----');
console.log(Object.keys(a));

console.log('---- for...of ----');
for (const i of a) {
    console.log(i);
}

console.log('---- undefined ----');
b.forEach(element => {
    console.log(element);
});