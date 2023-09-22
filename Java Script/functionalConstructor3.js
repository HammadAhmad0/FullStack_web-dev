const product = (n, p, r) => {
    this.name = n;
    this.product = p;
    this.rating = r;
}

const p = new product("iphone", 100000, 5);
console.log(p);


//cant use arrow functions as cnstructor

//the theory of this keyword pointing to calling context is not applicable 