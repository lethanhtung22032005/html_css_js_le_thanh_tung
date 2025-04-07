const form = document.querySelector('form');
const fullNameInput = document.getElementById('full-name');
const firstNameInput = document.getElementById('first-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const agreeCheckbox = document.getElementById('agree');

form.addEventListener('submit', (event) => {
    let isValid = true;

    if (!fullNameInput.value) {
        alert('Họ và tên không được để trống.');
        isValid = false;
    }

    if (!firstNameInput.value) {
        alert('Tên không được để trống.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        alert('Email không hợp lệ.');
        isValid = false;
    }

    if (!passwordInput.value || passwordInput.value.length < 8) {
        alert('Mật khẩu phải có ít nhất 8 ký tự.');
        isValid = false;
    }

    if (!confirmPasswordInput.value) {
        alert('Xác nhận mật khẩu không được để trống.');
        isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Mật khẩu xác nhận không khớp.');
        isValid = false;
    }

    if (!agreeCheckbox.checked) {
        alert('Bạn cần đồng ý với điều khoản và chính sách.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Ngăn chặn gửi form nếu không hợp lệ
    } else {
        alert("Đăng ký thành công!");
        window.location.href = "./login.html"; // Chuyển hướng trang
    }
});