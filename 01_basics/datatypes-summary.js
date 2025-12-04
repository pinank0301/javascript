// primitive datatypes

// 7 categories: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 342345345435n
console.log(typeof bigNumber);

// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Captain America", "Hulk"]
let myObj = {
    name: "Pinank",
    age: 22,

}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);

