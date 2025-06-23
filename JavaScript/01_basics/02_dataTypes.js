"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Harsh")


let name = "Harsh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
/*Even though null is a primitive datatype, it's typeof shows object. This is a long-standing bug in JS, but one that is likely never going to be fixed.
Too much code on the Web relies on the bug and thus fixing it would cause a lot more bugs! so we treat null as object.*/