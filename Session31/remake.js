let jobs = [
    {
        id: 1,
        name: a,
    },
    {
        id: 1,
        name: b,
        
    }
]
let flag = -1;
function renderJobs(){
    let str = "";
    for (let i = 0; i < jobs.length; i++) {
        str +=
            `
            <li>${jobs[i].name}
            <button onclick="updateJobs(${jobs[i].id})">sửa</button><button onclick="deleteJobs(${jobs[i].id})">xóa</button></li>
            `
    }
    document.getElementById("taskList").innerHTML = str;
}
renderJobs();
funtion addJobs(){
    let name = document.getElementById("job").value;
    if (flag !== -1) {
        let newUpdate = {
            id:jobs[flag].id,
            name:name
        }
        jobs.splice(flag, 1, newUpdate);
        document.getElementsByClassName("btn")[0].innerHTML = "sửa";
        flag = -1;
        return;
    } 
    console.log("name", name);
    let id;
    if (jobs.length == 0) {
        id = 1;
    } else {
        id = jobs[jobs.length - 1].id + 1;
    }
    jobs.push({
        id: id,
        name: name,
    });
    renderJobs();
}
    
//khai báo hàm xóa
function deleteJobs(id) {
    console.log("gọi hàm xóa!", id);
    let index = jobs.findIndex(item => item.id == id);
    jobs.splice(index, 1);
    renderJobs();
}
function updateJobs(id) {
    console.log("gọi hàm sửa!", id);
    let item = jobs.find(item => item.id == id);
    console.log("item", item);
    document.getElementById("job").value = item.name;
    document.getElementsByClassName("btn")[0].innerHTML = "sửa";
    let index = jobs.findIndex(item => item.id == id);
    flag = index;
}

