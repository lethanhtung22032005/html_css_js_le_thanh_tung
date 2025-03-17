let users = [];

function registerUser() {
    let name = prompt("Nhập tên của bạn:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    if (!email.includes('@') || (!email.endsWith('.com') && !email.endsWith('.vn'))) {
        console.log("Email không hợp lệ. Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }

    if (password.length < 6) {
        console.log("Mật khẩu phải có ít nhất 6 ký tự.");
        return;
    }

    let hasUpperCase = false;
    let hasSpecialChar = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) {
            hasUpperCase = true;
        }
        if (["!", "@", "#", "$", "%", "^", "&", "*"].includes(password[i])) {
            hasSpecialChar = true;
        }
    }

    if (!hasUpperCase || !hasSpecialChar) {
        console.log("Mật khẩu phải có ít nhất một ký tự viết hoa và một ký tự đặc biệt.");
        return;
    }

    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        console.log("Email đã tồn tại. Vui lòng chọn email khác.");
        return;
    }

    users.push({ name, email, password });
    console.log(`Đăng ký thành công! Chào mừng ${name}`);
}

function loginUser() {
    let email = prompt("Nhập email đăng nhập:");
    let password = prompt("Nhập mật khẩu:");

    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        console.log(`Đăng nhập thành công! Chào mừng ${user.name}.`);
    } else {
        console.log("Đăng nhập thất bại. Email hoặc mật khẩu không đúng.");
    }
}

function showMenu() {
    let choice;
    do {
        console.log("\n--- Menu ---");
        console.log("1. Đăng ký người dùng");
        console.log("2. Đăng nhập");
        console.log("3. Thoát");

        choice = +prompt("Chọn chức năng (1/2/3):");

        switch (choice) {
            case 1:
                registerUser();
                break;
            case 2:
                loginUser();
                break;
            case 3:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Chọn không hợp lệ, vui lòng thử lại.");
        }
    } while (choice !== 3);
}

showMenu();