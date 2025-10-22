let students = [
    { Name: "suba", age: "25", marks: "90"},
{name:"muthu",age:"28",marks:"95"},
{name:"ananthi",age:"20",marks:"92"}
];
students.forEach(stud=>console.log(stud));
let totalmarks=0;
for(let student of students){
    totalmarks+=student.marks;
}
let averagemarks=totalmarks/students.length;
console.log("average:",averagemarks);