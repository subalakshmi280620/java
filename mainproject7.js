// ------------------ LOAD FROM LOCAL STORAGE ------------------
let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;

function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

// ------------------ ADD OR UPDATE STUDENT ------------------
function addStudent() {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const className = document.getElementById("class").value.trim();
    const grade = document.getElementById("grade").value.trim();

    if (!name || !age || !className || !grade) {
        alert("Please fill all fields!");
        return;
    }

    const studentData = { name, age, class: className, grade };

    if (editIndex !== null) {
        students[editIndex] = studentData;
        editIndex = null;
        alert("Student updated successfully!");
    } else {
        students.push(studentData);
        alert("Student added successfully!");
    }

    saveToLocalStorage();
    clearForm();
    displayStudents();
}

// ------------------ CLEAR INPUT FORM ------------------
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("class").value = "";
    document.getElementById("grade").value = "";
}

// ------------------ DELETE STUDENT ------------------
function deleteStudent(index) {
    if (confirm("Do you really want to delete this student?")) {
        students.splice(index, 1);
        saveToLocalStorage();
        displayStudents();
    }
}

// ------------------ EDIT STUDENT ------------------
function editStudent(index) {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("class").value = student.class;
    document.getElementById("grade").value = student.grade;

    editIndex = index;
}

// ------------------ DISPLAY STUDENT TABLE ------------------
function displayStudents() {
    const table = document.getElementById("studentTable");
    const search = document.getElementById("searchBox").value.toLowerCase();

    table.innerHTML = "";

    const filtered = students.filter(std =>
        std.name.toLowerCase().includes(search)
    );

    filtered.forEach((std, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${std.name}</td>
                <td>${std.age}</td>
                <td>${std.class}</td>
                <td>${std.grade}</td>
                <td>
                    <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;
        table.appendChild(row);
    });
}

displayStudents(); // Initial load