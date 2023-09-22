function getMsg(){
    return console.log("Hey! msgs------ printed");

}
let msgs=getMsg();
// console.log(msgs);
let newMsg=msgs+" "+"yup got it its Hammad";
console.log(newMsg);

function displayMsg(
    messageToBeDisplayed="I am Buddy"
    ){
    console.log(messageToBeDisplayed);
}
displayMsg("Hello gog ogogg gg o")
displayMsg()
function add(x=30,y=12){
    return x+y;
}
console.log(add());

