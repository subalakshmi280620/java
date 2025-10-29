function addTask() {
    let taskInput = document.getElementById("taskInput"); 
    let taskList = document.getElementById("taskList");
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li"); 
        li.innerText = taskInput.value;
        let removeBtn = document.createElement("button"); 
        removeBtn.innerText = "❌";
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };
        li.onclick = function () {
            li.classList.toggle("completed");
        };
        li.appendChild(removeBtn);
         taskList.appendChild(li); 
         taskInput.value = "";
    }
}