const fib = (n) => {
    if (n < 2) return 1;
    
    // console.log(fib(n-1) + " " +  fib(n-2));
    return ( fib(n-1) + fib(n-2) );
  }
  
  console.log(fib(6));  // =13
  console.log(fib(7));  // =21
  console.log(fib(8));  // =34
  console.log(fib(50)); // = 20365011074   // slow process
  