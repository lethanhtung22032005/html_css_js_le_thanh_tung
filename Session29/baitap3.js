let menu = {
    "mon chinh": [
        { name: "Banh mi", price: 10, description: "Banh mi bate" },
        { name: "Banh bao", price: 11, description: "Banh bao xa xiu" },
    ],
    "mon trang mieng": [
        { name: "Kem", price: 13, description: "kem socola" },
    ],
    "nuoc uong": [
        { name: "cocacola", price: 10, description: "ngon hon pepsi" },
    ]
};
let choice;
do {
    console.log("1.Them mon an vao danh muc");
    console.log("2.Xoa mon an theo ten khoi danh muc");
    console.log("3.Cap nhat thong tin theo ten cua mon an");
    console.log("4.Hien thi toan bo menu gom danh muc va tung mon an");
    console.log("5.Tim kiem mon an theo ten trong toan bo menu");
    console.log("6.Thoat");
    choice = +prompt("Nhap lua chon cua ban");
    switch (choice) {
        case 1:
            addDish("mon chinh", "bun rieu cua", 20, "nhieu rieu it cua");
            break;
        case 2:
            deleteDish("mon chinh", "Banh mi")
            break;
        case 3:
            updateDish("mon trang mieng", "kem", "dua hau", 10, "sieu ngon")
            break;
        case 4:
            showMenu();
            break;
        case 5:
            foundDish("Banh mi");
            break;
        case 6:
            break;
        default:
            console.log("Vui long nhap lua chon hop le");
    }
} while (choice != 6);
function addDish(category, name, price, description) {
    if (menu[category]) {
        menu[category].push({ name, price, description })
        console.log(`Da them mon ${name} vao danh muc ${category}`);
    } else {
        console.log("Khong ton tai danh muc");
    }
}
function deleteDish(category, dishName) {
    if (menu[category]) {
        const index = menu[category].findIndex(dish => dish.name == dishName);
        if (index == -1) {
            console.log(`khong tim thay ${dishName} trong danh muc ${menu[category]}`);
        } else {
            menu[category].splice(index, 1);
            console.log(`Da xoa ${dishName} trong danh muc ${category}`);
        }
    } else {
        console.log(`khong tim thay danh muc ${menu[category]}`);
    }
}
function updateDish(category, dishName, newName, newPrice, newDescription) {
    if (menu[category]) {
        const dishNamee = menu[category].find(dish => dish.name == dishName);
        if (dishNamee) {
            dishNamee.name = newName;
            dishNamee.price = newPrice;
            dishNamee.descripton = newDescription;
            console.log(`Da cap nhat ${dishName} trong ${category}`);
        } else {
            console.log(`Khong tim thay ${dishName} trong ${category}`);
        }
    } else {
        console.log(`khong tim thay danh muc ${menu[category]}`);
    }
}
function showMenu() {
    console.log("Toàn bộ menu:");
    for (let category in menu) {
        console.log(`Danh mục: ${category}`);
        menu[category].forEach(dish => {
            console.log(`- ${dish.name}: Giá ${dish.price} VNĐ, Mô tả: ${dish.description}`);
        });
    }
}
function foundDish(nameDish) {
    let flag = 0;
    for (let category in menu) {
        let result = menu[category].find((dish) => dish.name == nameDish);
        if (result) {
            console.log(`- ${result.name}: Giá ${result.price} VNĐ, Mô tả: ${result.description}`);
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log("Khong tim thay mon an");
    }
}