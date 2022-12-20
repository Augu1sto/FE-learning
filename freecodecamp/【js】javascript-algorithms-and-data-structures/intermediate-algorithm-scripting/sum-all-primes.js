function sumPrimes(num) {
  const isPrime = new Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }
  let res = isPrime.reduce((sum, item, index) => {
    if (item) {
      sum += index;
    }
    return sum;
  }, 0 );
  console.log(res);
  return res;
}

sumPrimes(10);