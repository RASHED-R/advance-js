function stopWatch() {
    let count = 0;
    return function () {
        count++
        return count;
    }
}
console.log("clock 1");

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log("clock 2");

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log("clock 3");

const clock3 = stopWatch();
console.log(clock3());
console.log(clock3());
console.log(clock3());