function logNums(from, to) {
    let current = from;
  
    function go() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }
  
    go();
    let timerId = setInterval(go, 1000);
  }
  
  logNums(5, 15);