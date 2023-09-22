let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flash", "superman"]

let heropower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpidermanPoer: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }

}
Object.prototype.hammad = function() {
    console.log(`Hammad is present in all objects`);
}
console.log(myHeros.hammad());
console.log(heropower.hammad());

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says Hiii`);
}
console.log(myHeros.heyHitesh());
// console.log(heropower.heyHitesh());


//inheritance
const user = {
    name: "top name",
    email: "top@gmail.com"
}
const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvilable: false
}
const TaAssistance = {
    makeAssignment: "JS Assignment",
    fulltime: true,
__proto__: TeachingSupport     
}

// Teacher.__proto__ = user

Object.setPrototypeOf(TeachingSupport,Teacher)

console.log(TaAssistance.isAvilable);


String.prototype.truelength = function() {
    console.log(`True length is ${this.trim().length}`);
}
"Hammad     ".truelength()
"anurag      ".truelength()
