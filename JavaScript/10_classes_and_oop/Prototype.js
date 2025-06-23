let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){
    console.log(`harsh is present in all objects`);
}

Array.prototype.Heyharsh = function(){
    console.log(`harsh says hello`);
}

// heroPower.harsh()
// myHeros.harsh()
// myHeros.Heyharsh()
// heroPower.Heyharsh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// String.defineProperty(String.prototype, 'trueLength', {//used to define new property
//     get: function(){
    //         return this.trim().length;
    //     }
    // });
    
let anotherUsername = "ChaiAurCode     "
let myName = "harsh     "

console.log(myName.trueLength())
console.log(anotherUsername.trueLength())