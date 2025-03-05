const matKhauChinhXac = "khongcomatkhau"; 
const matKhauNhapVao = prompt("Vui lòng nhập mật khẩu:");
if (matKhauNhapVao === matKhauChinhXac) {
    document.write("Mật khẩu đúng!");
} else {
    document.write("Mật khẩu sai, vui lòng thử lại.");
}  