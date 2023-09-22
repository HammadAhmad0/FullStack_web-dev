let score = 4

function one() {
    let score = 0
    console.log(score);
}
function two() {
    let score =3;
    console.log(score);
}
function three() {
    console.log(score);
}
// one()
// two()
// three()
// console.log(score);

function outerFun() {
    let outerVar = 'I am at level 1'
    function innerFun() {
        let innerVal = "I am at scope level 2"
        console.log(outerVar);
    }
    console.log(innerVal);
    innerFun()
}
// outerFun()

const myGlobalVal = 0
function fun() {
    const val1 = 1;
    console.log(myGlobalVal);

    function innerOfFun() {
        const val2 = 2
        console.log(val2, val1, myGlobalVal);

        function innerOfInnerFun() {
            const val3 = 3
            console.log(val3, val2, val1, myGlobalVal);
        }
        innerOfInnerFun()
    }innerOfFun()
}
// fun()

//closure
function superFun() {
    let outerVal = "I am Outer "
    function minorFun() {
        console.log(outerVal);
    }
    minorFun()
}
// superFun()

const errorMessage = "File not Fould "
setTimeout(function callback(){
console.log(errorMessage);
},1000)

let pageCount = 0
const items = [2,3,4,5,6,8]
items.forEach(function iterator(num){
    pageCount++
    console.log(num);
})
console.log("page count ",pageCount);