let list = JSON.parse(localStorage.getItem("jobs")) || [];

function render() {
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += `
            <li>${list[i].name}<button onclick="remove(${list[i].id})">delete</button><button onclick="update(${list[i].id})">update</button></li>
        `;
    }
    document.getElementById("taskList").innerHTML = str;
}

render();

function addTask() {
    console.log("1223");
    let id = 0;
    let task = document.getElementById("taskInput").value.trim();

    if (task === "") {
        alert("Vui lòng nhập lại");
        return;
    }

    if (list.length === 0) {
        id = 0;
    } else {
        id = list[list.length - 1].id + 1;
    }

    let newJob = { id: id, name: task };
    list.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(list));
    document.getElementById("taskInput").value = "";
    render();
}

function remove(id) {
    console.log("delete");
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            let isConfirm = confirm("co chac ko?");
            if (!isConfirm) {
                return;
            }
            list.splice(i, 1);
            render();
            localStorage.setItem("jobs", JSON.stringify(list));

        }
    }
}

function update(id) {

}