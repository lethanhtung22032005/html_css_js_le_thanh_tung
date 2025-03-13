let listStudent = [];
let choice;
do {
    console.log("1.Nhap danh sach sinh vien");
    console.log("2.Hien thi danh sach sinh vien");
    console.log("3.Tim sinh vien theo ten");
    console.log("4.Xoa sinh vien khoi danh sach");
    console.log("5.Thoat");
    choice = +prompt("Moi ban nhap lua chon");
    switch (choice) {
        case 1:
            inputStudent();
            break;
        case 2:
            showList(listStudent);
            break;
        case 3:
            searchName(listStudent);
            break;
        case 4:
            deleteStudent(listStudent);
            break;
        case 5:
            break;
        default:
            console.log("Nhap lua chon hop le");
    }
} while (choice != 5)
function inputStudent() {
    let count = +prompt("Nhap so luong  sinh vien: ");
    let input = "";
    for (let i = 0; i < count; i++) {
        input = prompt("Nhap sinh vien thu " + (i + 1) + ": ");
        listStudent.push(input);
    }
}
function showList(arr) {
    if (arr.length == 0) {
        console.log("Danh sach rong");
    } else {
        console.log(arr);
    }
}
function searchName(arr) {
    let search = prompt("Moi ban nhap len can tim kiem: ");
    let flag = false;
    arr.forEach(element => {
        if (element.toLowerCase().includes(search.toLowerCase())) {
            console.log(element);
            flag = true;
        }
    });
    if (!flag) {
        console.log("Khong tim thay sinh vien trong danh sach");
    }
}
function deleteStudent(arr) {
    let nameDetele = prompt("Nhap ten sinh vien can xoa: ");
    let index = arr.findIndex((item) =>
        item.toLowerCase() == nameDetele.toLowerCase());
    if (index == -1) {
        console.log("Khong ton tai sinh vien");
    } else {
        arr.splice(index, 1);
        console.log("Da xoa sinh vien " + nameDetele + "");
    }
}