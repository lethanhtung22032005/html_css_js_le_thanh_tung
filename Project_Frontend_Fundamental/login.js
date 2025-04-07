document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput.value) {
        alert("Email không được để trống.");
        return;
    }

    if (!passwordInput.value) {
        alert("Mật khẩu không được để trống.");
        return;
    }

    // Thêm xác thực email và mật khẩu nếu cần

    window.location.href = "../test.html";
});