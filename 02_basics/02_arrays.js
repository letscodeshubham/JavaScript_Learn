const marvel_heros = ["Thor", "IronMan", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allHeros = [...marvel_heros, ...dc_heros]

// console.log(allHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [7, 8, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Shubham"));
console.log(Array.from({name: "Shubham"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

