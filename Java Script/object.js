let obj={id:101,name:"hammad",salary:10000};
let emp=new Object();
emp.id=101;
emp.name="Hammad"
emp.mob=7361944691
console.log(emp);

console.log(obj);

//using functions we can create object
function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
const e=new Emp(101,"Hammad",1200);
console.log(e);

//fetching data
console.log(emp.id);
console.log(emp['name']);

//Assigning 
emp.salary=1222222;
// emp['salary']=1234;

//update
emp.id=1999
emp['name']="sallu boii"

//delete
delete emp.id
console.log(emp);
