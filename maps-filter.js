// map er kj hoilo ekta array er vitor elements gula ke niye kono ekta kj kore sei ta return kore ekta array return korbe
// filter er kaj holo ekta array er moddhe theke filter kore sorto sapakkhe kj kore ekta array return korbe.

// find o array nia kaj kore but find array return kore na only value return kore.


const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// const array = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     array.push(result); //evabeo square kora jay,, 
// }

// using maps

const result = numbers.map(function (element) {
    return element * element;
})
console.log("result: ", result);


// using arrow

const square = numbers.map(element => element * element)

console.log("using array", square);

// filter

const bigger = numbers.filter(element => element > 4);
console.log("bigger", bigger);

// find

const isThere = numbers.find(element => element > 5);
console.log("isThere find: ", isThere);