let emptySet = new Set()
// console.log(emptySet.size);


let myArray = [1, 2, 3, 4, 4, 5]

//can store only uniue values
let newSet = new Set([...myArray])
console.log(newSet);

newSet.add(9)
// console.log(newSet);
// console.log(newSet.has(9));
newSet.clear()
console.log(newSet);



function setDiff(setA, setB) {
   return new Set([...setA].filter(el => !setB.has(el)))
}

let setA = new Set([1,2,3])
let setB = new Set([2,3,4])

console.log(setDiff(setA, setB));



let map = new Map()
console.log(map.size);

let arrO = [ 
    [1, "Mithun"],
    [2, "Alak"],
    [3, "shivam"],
    [5, "vinay"],

];

arrO.map((arrayItem) => map.set(arrayItem[0], arrayItem[1] ))

