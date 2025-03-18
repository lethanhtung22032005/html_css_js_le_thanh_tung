// Dữ liệu sản phẩm mẫu  
let products = [
    { id: 1, name: "Áo thun", category: "Thời trang", price: 100000, quantity: 10 },
    { id: 2, name: "Quần jean", category: "Thời trang", price: 250000, quantity: 5 },
    { id: 3, name: "Điện thoại", category: "Điện tử", price: 5000000, quantity: 3 },
    { id: 4, name: "Laptop", category: "Điện tử", price: 15000000, quantity: 2 },
    { id: 5, name: "Sách", category: "Văn phòng phẩm", price: 50000, quantity: 20 },
];

// Giỏ hàng  
let cart = [];

// Hàm hiển thị sản phẩm theo danh mục  
function displayProductsByCategory(category) {
    console.log(`\n--- Sản phẩm thuộc danh mục: ${category} ---`);
    const filteredProducts = products.filter(product => product.category === category);
    if (filteredProducts.length === 0) {
        console.log("Không có sản phẩm nào thuộc danh mục này.");
        return;
    }
    filteredProducts.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Số lượng còn lại: ${product.quantity}`);
    });
}

// Hàm thêm sản phẩm vào giỏ hàng  
function addToCart(productId, quantity) {
    const product = products.find(product => product.id === productId);

    if (!product) {
        console.log("Sản phẩm không tồn tại.");
        return false;
    }

    if (product.quantity === 0) {
        console.log("Sản phẩm này đã hết hàng.");
        return false;
    }

    if (product.quantity < quantity) {
        console.log(`Số lượng sản phẩm trong cửa hàng không đủ. Chỉ còn ${product.quantity} sản phẩm.`);
        return false;
    }

    // Cập nhật giỏ hàng  
    const existingCartItem = cart.find(item => item.id === productId);

    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
    }

    // Cập nhật số lượng sản phẩm trong cửa hàng  
    product.quantity -= quantity;
    console.log(`Đã thêm ${quantity} sản phẩm ${product.name} vào giỏ hàng.`);
    return true;
}

// Hàm sắp xếp sản phẩm theo giá  
function sortProductsByPrice(order) {
    if (order === "asc") {
        products.sort((a, b) => a.price - b.price);
        console.log("Sản phẩm đã được sắp xếp theo giá tăng dần.");
    } else if (order === "desc") {
        products.sort((a, b) => b.price - a.price);
        console.log("Sản phẩm đã được sắp xếp theo giá giảm dần.");
    } else {
        console.log("Lệnh sắp xếp không hợp lệ. Vui lòng chọn 'asc' (tăng dần) hoặc 'desc' (giảm dần).");
        return;
    }
    displayAllProducts();
}

// Hàm tính tổng tiền trong giỏ hàng  
function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

// Hàm hiển thị tất cả sản phẩm  
function displayAllProducts() {
    console.log("\n--- Tất cả sản phẩm trong cửa hàng ---");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Danh mục: ${product.category}, Giá: ${product.price}, Số lượng còn lại: ${product.quantity}`);
    });
}

//Hàm hiển thị giỏ hàng  
function displayCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng của bạn trống.");
        return;
    }

    console.log("\n--- Giỏ hàng của bạn ---");
    cart.forEach(item => {
        console.log(`Tên: ${item.name}, Giá: ${item.price}, Số lượng: ${item.quantity}, Tổng: ${item.price * item.quantity}`);
    });
    console.log(`Tổng tiền: ${calculateTotal()}`);
}


// Giao diện người dùng (sử dụng prompt trong môi trường console - cần chạy trong môi trường hỗ trợ prompt)  
function runShop() {
    while (true) {
        const choice = prompt(
            "Chọn hành động:\n" +
            "1. Hiển thị sản phẩm theo danh mục\n" +
            "2. Chọn sản phẩm để mua\n" +
            "3. Sắp xếp sản phẩm theo giá\n" +
            "4. Tính số tiền thanh toán trong giỏ hàng\n" +
            "5. Hiển thị giỏ hàng\n" +
            "6. Thoát"
        );

        switch (choice) {
            case "1":
                const category = prompt("Nhập tên danh mục (Thời trang, Điện tử, Văn phòng phẩm):");
                displayProductsByCategory(category);
                break;
            case "2":
                const productId = parseInt(prompt("Nhập ID sản phẩm muốn mua:"));
                const quantity = parseInt(prompt("Nhập số lượng sản phẩm muốn mua:"));
                addToCart(productId, quantity);
                break;
            case "3":
                const order = prompt("Chọn thứ tự sắp xếp (asc - tăng dần, desc - giảm dần):");
                sortProductsByPrice(order);
                break;
            case "4":
                console.log(`Tổng tiền trong giỏ hàng: ${calculateTotal()}`);
                break;
            case "5":
                displayCart();
                break;
            case "6":
                console.log("Cảm ơn bạn đã mua hàng!");
                return;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

// Khởi chạy chương trình  
runShop();  