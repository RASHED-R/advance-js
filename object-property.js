const students = [{
        id: 21,
        name: "Omor sunny"
    },
    {
        id: 31,
        name: "Mannaa"
    },
    {
        id: 41,
        name: "Sakib Khan"
    },
    {
        id: 51,
        name: "DeepJol"
    },
    {
        id: 61,
        name: "Rashed"
    }
];

const studentName = [];
for (let i = 0; i < students.length; i++) {
    let sName = students[i]
    studentName.push(sName.name);
}

console.log(studentName);

// or using map

console.log("using map");

//student name
const studentName1 = students.map(sNmae => sNmae.name);
console.log("student name: : ", studentName1);

// student iD
const studentId = students.map(sId => sId.id);
console.log("student iD: ", studentId);

// student iD bigger using filter
const bigger = students.filter(s => s.id > 40);
console.log("bigger: ", bigger);

// student iD biggerOne using find
const biggerone = students.find(s => s.id > 40);
console.log("biggerone: ", biggerone);