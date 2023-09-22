// function h(x, fn) {
//     // h -> is a higher order function
//     //fn -> Callback

//     console.log(x*x);
//     fn(x*x);
// }
// h(10, exce)

// function exce(n) {
//     console.log("Squared value is ", n);
// }
//Above code is synchoronous call back because it is executing line by line


// console.log("start ");
// setTimeout(function f(){
//    console.log("timer Done"); 
// },500);
// for(let i = 0; i < 10000000000; i++) {}


// console.log("end");



//Macro Task Queue ---> Event loop


console.log("start ");
setTimeout(function f(){
    console.log("Timer done 1...");
},100);


setTimeout(function f(){
   console.log("timer Done"); 
},0);
for(let i = 0; i < 10000000000; i++) {}


console.log("end");