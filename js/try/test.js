function countdown(n){
    if (n < 1) {
        return [];
    }
    if (n === 1) {
        return [1];
    }
    let a = countdown(n-1);
    a.unshift(n);
    return a;
}

console.log(countdown(2));

