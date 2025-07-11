//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// // console.log(id === anotherId);

// const bigNumber = 2843684362546412345234523n

// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];

// let myObj = {
//     name: "Shubham",
//     age: 22,
// }


// const myFunction = function(){
//     console.log("Hello World");
    
// }

// console.log(typeof heros);





// **********************************************************************

//Memory

// Stack (Primitive), Heap (Non-Primitive)

let myPetName = "Balvinder"

anotherName = "Sukhvinder"

console.log(anotherName);
console.log(myPetName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "shubham@gmail.com"

console.log(user1.email);
console.log(user2.email);
