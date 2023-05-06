//true /// == only value check kore.
const num1 = 2;
const num2 = 2;
if (num1 == num2) {
    console.log("true");
} else {
    console.log("false");
}

//true
const num3 = 2;
const num4 = "2";
if (num3 == num4) {
    console.log("true");
} else {
    console.log("false");
}

// false   //  === type and value check kore
const num5 = 2;
const num6 = "2";
if (num5 === num6) {
    console.log("true");
} else {
    console.log("false");
}

// false
const first = 0;
const second = true;

if (first == second) {
    console.log("true");
} else {
    console.log("false");
}

// false
const first1 = 0;
const second1 = true;

if (first1 === second1) {
    console.log("true");
} else {
    console.log("false");
}

// true
const first2 = 0;
const second2 = false;

if (first2 == second2) {
    console.log("true");
} else {
    console.log("false");
}

// false
const first3 = 0; //in java script 0= false and 1= true, its by default/
const second3 = false;

if (first2 === second2) { //because here type is change 0= inti and false is boolean.//
    console.log("true");
} else {
    console.log("false");
}