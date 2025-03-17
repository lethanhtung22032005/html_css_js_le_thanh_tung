let task = [];
let choice;
do {
    console.log("\n1. Thêm công việc mới");
    console.log("2. Hiển thị tất cả công việc");
    console.log("3. Cập nhật trạng thái công việc theo ID");
    console.log("4. Lọc công việc theo trạng thái");
    console.log("5. Sắp xếp công việc theo trạng thái");
    console.log("6. Thoát");
    choice = parseInt(prompt("Nhập lựa chọn của bạn:"));
    switch (choice) {
        case 1:
            addTask();
            break;
        case 2:
            showTask(task);
            break;
        case 3:
            updateTask(task);
            break;
        case 4:
            filterTask(task);
            break;
        case 5:
            sortTask(task)
            break;
        case 6:
            break;
        default:
            console.log("Vui long nhap lai cho hop le");
    }
} while (choice != 6);
function addTask() {
    let quantity = +prompt("Ban muon them may cong viec: ");
    for (let i = 1; i <= quantity; i++) {
        const id = i;
        const nameTask = prompt(`Nhap ten cong viec thu ${i}: `)
        const description = prompt("Mo ta: ");
        const startTime = prompt("Thoi gian bat dau: ");
        const status = prompt("Nhap trang thai (hoan thanh/chua hoan thanh): ");
        task.push({ id, nameTask, description, startTime, status });
    }
}
function showTask(arr) {
    for (let item of arr) {
        console.log(`id: ${item.id}-ten cong viec: ${item.nameTask}-mo ta:${item.description}-thoi gian bat dau:${item.startTime}-trang thai:${item.status}`);
    }
}
function updateTask(arr) {
    const foundId = +prompt("Nhap id can tim kiem: ");
    let result = arr.find((item) => item.id == foundId);
    if (result) {
        if (result.status == "chua hoan thanh") {
            result.status = "hoan thanh";
        } else {
            result.status = "chua hoan thanh"
        }
    } else {
        console.log("Khong tim thay phan tu co id nhu tim kiem");
    }
}
function filterTask(arr) {
    let done = arr.filter((item) => item.status == "hoan thanh");
    let noDone = arr.filter((item) => item.status == "chua hoan thanh");
    console.log("Cac cong viec hoan thanh: ", done);
    console.log("Cac cong viec chua hoan thanh: ", noDone);

}
function sortTask(arr) {
    arr.sort((a, b) => {
        if (a.status == b.status) {
            return 0;
        }
        return a.status == "chua hoan thanh" ? -1 : 1
    })
    showTask(arr);
}