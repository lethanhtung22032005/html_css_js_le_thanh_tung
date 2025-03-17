let choice;
let managementProduct = [];
do {
    console.log("1.Them san pham vao danh sach san pham");
    console.log("2.Hien thi tat ca san pham");
    console.log("3.Hien thi chi tiet san pham theo id: ");
    console.log("4.Cap nhat thong tin san pham theo id san pham");
    console.log("5.Xoa san pham theo id");
    console.log("6.Xoa san pham theo id");
    console.log("7.Thoat");
    choice = +prompt("Nhap lua chon cua ban: ");
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            showProduct(managementProduct);
            break;
        case 3:
            detailProduct(managementProduct);
            break;
        case 4:
            updateProduct(managementProduct);
            break;
        case 5:
            deleteProduct(managementProduct);
            break;
        case 6:
            filterPrice(managementProduct);
            break;
        case 7:
            break;
        default:
            console.log("Vui long nhap lai lua chon hople");
    }
} while (choice != 7);
function addProduct() {
    let number = +prompt("Ban muon them may san pham ");
    for (let i = 1; i <= number; i++) {
        const id = i;
        const name = prompt("Nhap ten san pham: ");
        const price = +prompt("Nhap gia san pham: ");
        const category = prompt("Danh muc san pham: ");
        const quantity = +prompt("So luong san pham trong kho: ");
        if (isNaN(price) || isNaN(quantity)) {
            console.log("Nhap lai gia hoac so luong sao cho hop le");
            return;
        }
        managementProduct.push({ id, name, price, category, quantity });
    }
}
function showProduct(arr) {
    arr.map((item) => console.log(`id:${item.id}-ten:${item.name}-gia:${item.price}-danh sach san pham${item.category}-so luong: ${item.quantity}`));
}
function detailProduct(arr) {
    let searchId = +prompt("Nhap id ban muon tim kiem: ");
    let result = arr.find((item) => item.id == searchId);
    if (result) {
        console.log(`ID:${result.id}-ten:${result.name}-gia:${result.price}-danh muc:${result.category}-so luong:${result.quantity}`);
    } else {
        console.log("Khong tim thay id nhu tim kiem");
    }
}
function updateProduct(arr) {
    let searchId = +prompt("Nhap id: ");
    let result = arr.find((item) => item.id == searchId);
    let name = prompt("Nhap ten can cap nhat: ");
    let price = +prompt("Nhap price can cap nhat: ");
    if (result) {
        result.name = name;
        result.price = price;
        showProduct(arr);
    } else {
        console.log("Khong tim thay id nhu tim kiem");
    }
}
function deleteProduct(arr) {
    let searchId = +prompt("Nhap id: ");
    let result = arr.find((item) => item.id == searchId);
    if (result) {
        arr.splice(searchId, 1);
        showProduct(arr);
    } else {
        console.log("Khong tim thay id nhu tim kiem");
    }
}
function filterPrice(arr) {
    let minPrice = prompt("Ban muon minPrice la bao nhieu: ");
    let maxPrice = +prompt("Ban muon maxPrice la bao nhieu: ");
    let result = arr.filter((item) => {
        item.price >= maxPrice && item.price <= maxPrice;
    })
    if (result.length > 0) {
        console.log(`Cac phan tu co gia trong khoang ${minPrice} va ${maxPrice} la: `);
        result.array.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
        });
    }
}