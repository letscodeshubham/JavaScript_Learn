// singleton

// object literals

// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Shubham",
    [mySym]: "myKey1",
    "full name": "Shubham Kumar",
    age: 10,
    location: "Gurgaon",
    email: "shubham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// Object.freeze(JsUser)

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "shubham@google.com"

// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello Everyong");

}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());




