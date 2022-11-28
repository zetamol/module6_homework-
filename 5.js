const expon = (x, n) => {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = 5;
  let n = 2;
  
  if (n < 1) {
    console.log(`Используйте натуральные числа!`);
  } else {
    console.log( expon(x, n) );
  }