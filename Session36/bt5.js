function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task.name, task.status));
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push({
            name: task.querySelector("span").textContent,
            status: task.parentElement.id
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let taskName = document.getElementById("taskInput").value;
    if (taskName.trim() === "") return;
    renderTask(taskName, "pending");
    saveTasks();
    document.getElementById("taskInput").value = "";
}

function renderTask(taskName, status) {
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${taskName}</span> <button onclick="moveTask(this)">Chuyển tiếp</button>`;
    document.getElementById(status).appendChild(task);
}

function moveTask(button) {
    let task = button.parentElement;
    let currentColumn = task.parentElement.id;
    if (currentColumn === "pending") {
        document.getElementById("inProgress").appendChild(task);
    } else if (currentColumn === "inProgress") {
        document.getElementById("completed").appendChild(task);
        button.remove();
    }
    saveTasks();
}

window.onload = loadTasks;