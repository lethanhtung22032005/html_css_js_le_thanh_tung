let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
];

function loadTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    todoList.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `${item.task} <span class="close" onclick="removeTask(event, this)">×</span>`;
        li.onclick = function () { toggleTask(this); };

        if (item.completed) {
            li.classList.add("checked");
        }

        taskList.appendChild(li);
    });
}

function addTask() {
    let taskInput = document.getElementById("newTask");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    let newTask = { id: todoList.length + 1, task: taskValue, completed: false };
    todoList.push(newTask);
    loadTasks();
    taskInput.value = "";
}

function toggleTask(element) {
    let index = Array.from(element.parentNode.children).indexOf(element);
    todoList[index].completed = !todoList[index].completed;
    element.classList.toggle("checked");
}

function removeTask(event, element) {
    event.stopPropagation();
    let index = Array.from(element.parentNode.parentNode.children).indexOf(element.parentNode);
    todoList.splice(index, 1);
    loadTasks();
}

document.getElementById("newTask").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

window.onload = loadTasks;