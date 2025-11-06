let students = [
    { name: "John", marks: [80, 75, 90] },
    { name: "Emma", marks: [85, 95, 92] },
    { name: "David", marks: [70, 60, 65] }
];
students.forEach(student => {
    let avgMarks = student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length;
    console.log(`${student.name} - Average Marks: ${avgMarks}`);
});