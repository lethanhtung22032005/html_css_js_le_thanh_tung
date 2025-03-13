let choice;
do {
    console.log("1. Tính diện tích hình tròn");
    console.log("2. Tính chu vi hình tròn");
    console.log("3. Tính diện tích hình chữ nhật");
    console.log("4. Tính chu vi hình chữ nhật");
    console.log("5. Thoát");

    choice = +prompt("Chọn lựa chọn: ");  // Lấy lựa chọn từ người dùng

    switch (choice) {
        case 1:
            console.log("Diện tích hình tròn: " + areaofCircle());
            break;
        case 2:
            console.log("Chu vi hình tròn: " + circumferenceofCircle());
            break;
        case 3:
            console.log("Diện tích hình chữ nhật: " + areaofRectangle());
            break;
        case 4:
            console.log("Chu vi hình chữ nhật: " + perimeterofRectangle());
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Vui lòng nhập lại lựa chọn");
    }
} while (choice != 5);

function areaofCircle() {
    let radis = +prompt("Nhập bán kính hình tròn: ");
    return (Math.PI * radis * radis);
}

function circumferenceofCircle() {
    let radis = +prompt("Nhập bán kính hình tròn: ");
    return (2 * Math.PI * radis);
}

function areaofRectangle() {
    let height = +prompt("Nhập chiều dài hình chữ nhật: ");
    let width = +prompt("Nhập chiều rộng hình chữ nhật: ");
    return (height * width);
}

function perimeterofRectangle() {
    let height = +prompt("Nhập chiều dài hình chữ nhật: ");
    let width = +prompt("Nhập chiều rộng hình chữ nhật: ");
    return (height + width) * 2;
}