let books = [
    { id: 1, name: "Book A", price: 100, quantity: 10, category: "Fiction" },
    { id: 2, name: "Book B", price: 150, quantity: 5, category: "Non-Fiction" },
    { id: 3, name: "Book C", price: 200, quantity: 8, category: "Fiction" }
];

let cart = [];

function handleDisplayBCategory(listBook) {
    let category = prompt("Nhập thể loại sách:");
    if (!category) {
        console.log("Thể loại không hợp lệ!");
        return;
    }
    let newListBookByCategory = listBook.filter((book) => book.category === category);
    console.log("Danh sách sách trong thể loại", category, newListBookByCategory);
}

function handleAddBook(listBook) {
    let name = prompt("Nhập tên sách:");
    let price = parseFloat(prompt("Nhập giá sách:"));
    let quantity = parseInt(prompt("Nhập số lượng sách:"));
    let category = prompt("Nhập thể loại sách:");

    if (!name || isNaN(price) || isNaN(quantity) || !category) {
        console.log("Dữ liệu không hợp lệ!")
        return;
    }

    let id = listBook.lngth === 0 ? 1 : listBook[listBook.length - 1].id + 1;

    listBook.push({ id, name, price, quantity, category });
    console.log("Thêm sách thành công!", { id, name, price, quantity, category });
}

function searchBook() {
    let keyword = prompt("Nhập tên hoặc ID sách:");
    let result = books.filter(book => book.name.includes(keyword) || book.id.toString() === keyword);
    console.log("Kết quả tìm kiếm:", result);
}

function buyBook() {
    let bookId = parseInt(prompt("Nhập ID sách muốn mua:"));
    let quantity = parseInt(prompt("Nhập số lượng muốn mua:"));
    let book = books.find(book => book.id === bookId);

    if (book && book.quantity >= quantity) {
        book.quantity -= quantity;
        cart.push({ id: book.id, name: book.name, price: book.price, quantity });
        console.log("Mua sách thành công!");
    } else {
        console.log("Sách không đủ số lượng hoặc không tồn tại!");
    }
}

function sortBooksByPrice(order) {
    let sortedBooks = [...books];
    sortedBooks.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    console.log("Danh sách sách sau khi sắp xếp:", sortedBooks);
}

function calculateTotal() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log("Tổng số lượng sách đã mua:", totalQuantity);
    console.log("Tổng tiền cần thanh toán:", totalPrice);
}

function displayTotalStock() {
    let totalStock = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log("Tổng số lượng sách trong kho:", totalStock);
}

function mainMenu() {
    let choice;
    do {
        choice = prompt("Chọn chức năng:\n1. Hiển thị sách theo thể loại\n2. Thêm sách\n3. Tìm kiếm sách\n4. Mua sách\n5. Sắp xếp sách theo giá\n6. Tính tổng tiền\n7. Hiển thị tổng số sách trong kho\n8. Thoát");
        switch (choice) {
            case "1": handleDisplayBookByCategory(books); break;
            case "2": handleAddBook(books); break;
            case "3": searchBook(); break;
            case "4": buyBook(); break;
            case "5":
                let order = prompt("Nhập 'asc' để tăng dần, 'desc' để giảm dần:");
                sortBooksByPrice(order);
                break;
            case "6": calculateTotal(); break;
            case "7": displayTotalStock(); break;
            case "8": console.log("Thoát chương trình"); break;
            default: console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "8");
}

mainMenu();
