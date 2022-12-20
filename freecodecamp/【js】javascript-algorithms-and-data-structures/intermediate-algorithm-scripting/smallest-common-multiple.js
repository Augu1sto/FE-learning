const gcd = (x, y) => {
  // Euclid: if x>=y>0 ∈ N, then gcd(x,y) = gcd(y, x mod y)
  if ( x < y) {
    return gcd(y, x);
  }
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}

const lcm = (x, y) => {
  return x * y / gcd(x, y);
}

function smallestCommons(arr) {
  let [a, b] = arr[0] < arr[1] ? arr : [arr[1], arr[0]];
  let res = 1;
  for(let i = a; i <= b; i++) {
    res = lcm(res, i);
    console.log(res);
  }
  return res;
}

smallestCommons([1,5]);