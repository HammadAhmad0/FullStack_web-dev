function product (n, p, r) {
    this.name = n;
    this.price = p;
    this.ratings = r;
// return 10;  does not effect
// return {x:10, y:14} //we can return the custom objects
// return this
}


const p = new product("mac", 150000, 5);
console.log(p);

let x = {
    p:product
};
x.p("airpods", 2000, 5);
console.log(x);

/**
 * 1. this keyword in js is diff than other languages
 * 2. this keyword refers to the context from where we called
 * 
 * in this function cunstructor also
 * - if you return it is ignored and we return the object referred by this
 * - if you return a custom obj, then the custom obj is returned
 * - if you dont return anything , then object referred by this is return
 */