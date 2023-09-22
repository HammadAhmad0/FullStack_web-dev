//what are classes and objects
class product {
  //properties -> variables -> data member
  // name;
  // price;
  // ratings;
  //behaviours -> functions -> member functions



  #ratings; //private data member
  constructor(n, p, r) {
    //custom constructor
    console.log("calling the cnstructor");
    this.name = n; //this keyword refering calling context
    this.price = p;
    this.#ratings = r;

    //return 10; if you're returning primitive then it will be avoided in constructor
    // return {x:0, y:20}  //if you return non primitive then it will return 
    // return this
  }


  static custom() { //static method is a class properties so we can call them by using className.staticfnName
console.log("calling a static method: ");
  }

  //Getter and setter
  get RatingGetter() {
    console.log(this.#ratings);
  }

  set RatingSeter(r) {
    if(r < 0) return;
    this.#ratings=r;
  }
  display() {
    //member functions
    console.log(
      " displaying the current product ",
      this.name,
      this.price,
      this.#ratings
    );
  }
}

const p = new product("iphone", 1000, 5); //new created an empty plane object
//in the above peace of code we calling the constructor method
console.log(p);
p.RatingSeter = 10;
p.RatingGetter;
p.display();

// p.name = "Samsung "
// console.log(p.name);
// console.log(p.ratings); //cant do anthing with private data member

// product.custom() //never called by obj
