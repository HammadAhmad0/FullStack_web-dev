const sqr=(x) => x*x;
const sumOfNum = (x,y) => x+y;

//Multiple statements in function expression
const sum =(x,y) => {
    console.log(`Adding ${x} and ${y}`);
    return x+y;
}

//Returning an object
const sumAndDiff =(x,y) =>({sum:x+y, difference: x-y})

//calling a function
let output1=sqr(5)
console.log(output1);
let output2=sumOfNum(2,3);
console.log(output2);
let output3=sum(2,11)
console.log(output3);
let output4=sumAndDiff(22,11)
console.log(output4);

//self invoking function
(function(x){
    console.log(x*x);
})(5);