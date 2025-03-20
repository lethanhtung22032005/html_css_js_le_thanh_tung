let job = [
    { id: 1, name: "toan" },
];

function render() {
    let str = "";
    for (let i = 0; i < job.length; i++) {
        str +=
            `
        <li> ${job[i].name}<button onclick="deleteJob(${job[i].id})">xoa</button></li>
        `
    }
    document.getElementsByClassName("job")[0].innerHTML = str;
    console.log(str);

}
render();

function addJob() {
    let text = document.getElementById("text").value.trim();
    if (text === "") {
        alert("nhap lai");
        return;
    }
    let newText = { name: text, id: job.length > 0 ? job[job.length - 1].id + 1 : 1 };
    job.push(newText);
    document.getElementById("text").value = "";
    render();
}

function deleteJob(id) {
    console.log("xoa thang nay", id);
    let index = job.findIndex(item => item.id == id);
    job.splice(index, 1);
    render();
}