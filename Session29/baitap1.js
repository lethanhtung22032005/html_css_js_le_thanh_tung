let chocie;
let contact = [];
do {
    console.log(("1.Them doi tuong contact ao danh sach lien he"));
    console.log(("2.Hien thi danh sach danh ba"));
    console.log("3.Tim kiem thong tin Contact theo so dien thoai");
    console.log("4.Cap nhat thong tin Contact(name,email,phone) theo id");
    console.log("5.Xoa mot doi tuong Contact khoi danh sach danh ba theo id");
    console.log("6.Thoat");
    choice = +prompt("Nhap lua chon cua ban: ");
    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            showList(contact);
            break;
        case 3:
            findPhone(contact);
            break;
        case 4:
            updateContact(contact);
            break;
        case 5:
            deleteContact(contact);
            break;
        case 6:
            break;
        default:
            console.log("Moi nhap lai lua chon hop le");
            break;
    }
} while (choice != 6);
function addContact() {
    let quantity = +prompt("Nhap so luong nguoi ma ban muon them vao danh sach: ");
    if (quantity > 0) {
        for (let i = 1; i <= quantity; i++) {
            const id = i;
            const name = prompt("Nhap ten: ");
            const email = prompt("Nhap email: ");
            const phone = prompt("Nhap so dien thoai: ");
            contact.push({ id, name, email, phone });
        }
    } else {
        console.log("Vui long nhap lai (quantity>0): ");
    }
}
function showList(arr) {
    arr.map((item) => console.log(`id: ${item.id}-ten:${item.name}-email:${item.email}-sdt:${item.phone}`));
}
function findPhone(arr) {
    let phone = prompt("Nhap so dien thoai can tim kiem: ");
    let result = arr.filter((item) => {
        return item.phone.includes(phone);
    })
    if (result.length == 0) {
        console.log("Khong tim thay contact theo sdt");
    } else {
        return console.log(result);;
    }
}
function updateContact(arr) {
    let id = +prompt("Nhap id can tim kiem: ");
    let name = prompt("Nhap ten can cap nhat: ");
    let email = prompt("Nhap email can cap nhat: ");
    let phone = prompt("Nhap sdt can cap nhat: ");
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr[i].name = name;
            arr[i].email = email;
            arr[i].phone = phone;
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log("Khong tim thay id nhu tim kiem");
    }
}
function deleteContact(arr) {
    let id = +prompt("Nhap id can tim kiem: ");
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            arr.splice(i, 1);
            flag = 1;
        }
    }
    if (flag == 0) {
        console.log("Khong tim thay id");
    }
}