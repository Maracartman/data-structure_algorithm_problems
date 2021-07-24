//0 1 1 2 3 5 8 13 21...
// fib(0) = 0
// fib(1) = 1
// fib(2) = 1 //Base
const fib = n => {
    let fibs = {
        0: 0,
        1: 1,
        2: 1
    }
    for(let i = 3; i<=n;++i){
        if(i === n) return fibs(n-1) + fibs(n-2)
        else
            fibs[i] = fibs(i-1) + fibs(i-2)
    }

}