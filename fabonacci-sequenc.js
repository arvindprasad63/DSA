// const fib = (n) => {
//     const fibarray = [0, 1];
//     for( var i=2; i<=n; i++ ){
//         fibarray.push(fibarray[i-2] + fibarray[i-1]);
//     }
//     return fibarray;

// }
// console.log(fib(10));



const num = 100;

let x = 0;
let y = 1;

let fn = x + y;

console.log(x);
while (fn < num){
    console.log(fn);
    fn = x + y;
    x = y;
    y = fn;
}