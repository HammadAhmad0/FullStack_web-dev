let emp={
    id:101,
    name:'Sallu',
    age:24

};
//reurn keys
let keys=Object.keys(emp);
console.log(keys);
//values
let val=Object.values(emp);
console.log(val);

//for key and values at same time
let entries=Object.entries(emp);
console.log(entries);
 
emp.id=100;
console.log(emp);

// if we do   not  upadte or freeze
Object.freeze(emp)
emp.id=1001;
console.log(emp);
//for allow we will use Object.seal(emp)

//for copy old obj into new obj
let o=Object.assign({x:11122},emp);
console.log(o);