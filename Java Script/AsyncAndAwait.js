function createpromise() {
    return new Promise (function exec(resolve, reject){
        setTimeout(function f() {
            console.log("timer done...");
            // resolve(10)
            reject(10)
        },3000)
    })
}
async function consume() {
    try {
        console.log("Inside function...");
        const response = await createpromise();
        const response1 = await createpromise();
        console.log("response is ", response);
    }catch(err){
console.log("handled..",err);
    }
   
} 
console.log("start");
consume();
console.log("end");