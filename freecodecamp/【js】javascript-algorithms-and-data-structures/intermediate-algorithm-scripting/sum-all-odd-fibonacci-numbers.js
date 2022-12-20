 function sumFibs(num) {
   let p = 1, sum = 1, q = 1;
   let cur = 1;
   while(cur <= num) {
     if(cur%2 === 1) {
       sum += cur;
     }
     cur = p + q;
     p = q;
     q = cur;
   }
  return sum;
}

sumFibs(4);