const name = "Shubham"
const repoCount = 3

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shubham-game-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0, 4)

console.log(gameName.substring(0, 4));
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "       Shubham       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20kumar"

const newUrl = url.replace('%20', '-')

console.log(newUrl);


const newUrl2 = url.includes('shubham')

console.log(newUrl2);

console.log(url.includes('kumar'));

console.log(gameName.split('-'));

