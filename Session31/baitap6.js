let fixedUsername = "huanrose@gmail.com";
let fixedPassword = "123456";


function validateLogin() {
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    if (usernameInput === fixedUsername && passwordInput === fixedPassword) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại! Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.");
    }
}