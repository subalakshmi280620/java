let tasks = []; // Array of objects

// Add Task
function addTask() {
    let title = document.getElementById("taskTitle").value.trim();
    let category = document.getElementById("taskCategory").value;
    let dueDate = document.getElementById("taskDate").value;

    if (!title || !dueDate) {
        alert("Please enter title and date!");
        return;
    }

    tasks.push({
        id: Date.now(),
        title: title,
        category: category,
        dueDate: dueDate,
        completed: false
    });

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDate").value = "";

    displayTasks();
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

// Toggle Completed
function toggleComplete(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    displayTasks();
}

// Edit Task Title
function editTask(id) {
    let newTitle = prompt("Edit task title:");
    if (newTitle) {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
        );
    }
    displayTasks();
}

// Sort by DATE
function sortTasks() {
    let sortType = document.getElementById("sortDate").value;

    if (sortType === "asc") {
        tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortType === "desc") {
        tasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }

    displayTasks();
}

// Display Tasks
function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let filter = document.getElementById("statusFilter").value;

    tasks
        .filter(task => {
            if (filter === "completed") return task.completed;
            if (filter === "pending") return !task.completed;
            return true;
        })
        .forEach(task => {
            let div = document.createElement("div");
            div.className = "task";

            div.innerHTML = `
                    <div>
                        <strong class="${task.completed ? 'completed' : ''}">
                            ${task.title}
                        </strong>
                        <br>
                        <small>Category: ${task.category}</small><br>
                        <small>Due: ${task.dueDate}</small>
                    </div>

                    <div>
                        <button onclick="toggleComplete(${task.id})">✔</button>
                        <button onclick="editTask(${task.id})">✏</button>
                        <button onclick="deleteTask(${task.id})">🗑</button>
                    </div>
                `;

            list.appendChild(div);
        });
}