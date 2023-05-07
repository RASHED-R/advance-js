const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < num.length; i++) { // all outputs
    console.log(num[i]);
}
console.log("break");
for (let i = 0; i < num.length; i++) {
    if (num[i] > 4) {
        break;
    }
    console.log(num[i]);
}

const num1 = [1, 2, -3, 4, -5, 6, -7, 8, -9];

console.log("continue");
for (let i = 0; i < num1.length; i++) {
    if (num1[i] < 0) {
        continue; // continue means that skip those numbers which is agree with this condition
    }
    console.log(num1[i]);
}