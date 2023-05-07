const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("slice num");
//
const slice = num.slice(2, 4);
console.log(slice);
//
console.log("splice num");
const splice = num.splice(3, 2, 77, 22); // start point,/ koto porjjonto splice korbe,/insert number 
console.log(splice);
///
console.log("main array");
console.log(num);

// join
console.log("join");
const join = num.join(""); // all numbers are joined by without space
console.log(join);

console.log("join1");
const join1 = num.join("~"); // all numbers are joined by this sign (~)
console.log(join1);