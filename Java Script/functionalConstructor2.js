const product = function (n, p, r) {
    this.name = n;
    this.price = p;
    this.rating = r;

}
const p = new product("Mi", 10000, 4);
console.log(p);