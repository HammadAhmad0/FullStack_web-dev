//Spread
const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

// const threeArray = oneArray.concat(twoArray)
// const threeArrray =[oneArray,twoArray]

const threeArray = [...oneArray , ...twoArray]
console.log(threeArray);




//...oneArray = 1, 2, 3, 4 //spread
//...twoArray = 5, 6, 7, 8


// function testOne(){
//     // console.log(typeof arguments);

//     console.log(Array.from(arguments)); //convert arr to objects

// }




function manyArguments() {
    console.log(typeof arguments);
    let args = Array.from(arguments)
   let finalArr= args.map(e => e)
console.log(finalArr);
}
// manyArguments(1,2,3)
// manyArguments(1,2,3,4,5,6)


//REst

function manyArgs2(...args) {
    console.log(typeof args);
    let finalArr=args.map(e => e)
    console.log(finalArr);
    
}
// manyArgs2(1,2,3,4)
// manyArgs2(2,3,3,34)

const names = ["surname", "flash"]
const newNames = ["Batman", ...names, "thor"]

const siteName = "pwskills"
console.log([...siteName]);

function pwskills(...values){
    return values


}
console.log(pwskills("superman", "flash"));