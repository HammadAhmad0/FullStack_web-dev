// let arr=[1,2,3,4,5];
// arr.push(6,7);
// console.log(arr);
// arr.pop(7)
// console.log(arr);
// let f=arr.shift();
// console.log(f);

// console.log(arr);
// arr.unshift(9)
// console.log(arr);

let a1=[1,2,3,4,5]
let a2=[6,7,8]
let a3=a1.concat(a2)
console.log(a1,a2,a3);

let s=a3.join("");
console.log(s);
console.log(a3.reverse());
// console.log(a1.indexOf(1));
console.log(a1.slice(0,6));
//splice is used to add element at desired pos
a1.splice(2,1,11)
console.log(a1);