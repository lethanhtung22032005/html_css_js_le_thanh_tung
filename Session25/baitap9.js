function validEmail(email) {
    if (email.indexOf("@") == -1) {
        return false;
    }
    return (email.endsWith(".com") || email.endsWith(".vn"))
}
let users = [];
function registerEmail() {
    let email = prompt("Nhap email muon dang ki: ");
    if (validEmail(email)) {
        if (users.includes(email)) {
            console.log("Tai khoan da ton tai");
            return;
        } else {
            users.push(email);
            console.log("Da dang ky thanh cong");
        }
    } else {
        console.log("Email nhap phai co chua ki tu @ va ket thuc bang .com hoac .vn");
    }
}
registerEmail();