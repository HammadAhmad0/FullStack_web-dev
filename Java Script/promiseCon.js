function createpromise() {
    return new Promise(function exec(resolve, reject){
        //your code goes here
        setTimeout(function fun(){
console.log("timer done...");
// resolve("done")
reject(10)
        },3000)
    });
}
console.log("start");
let x = createpromise();
console.log("got new promise");
x.then(function f(value){ //for catch
    console.log("promise done..", value);
}) //we can use multiple then because it return itself promise .then()
.catch(function g(value){ //for reject
    console.log("handled", value);
}).finally(function fn(){
    console.log("Finally...");
})
console.log("end");

for(let i = 0; i < 10000000000; i++){
    //some code
}