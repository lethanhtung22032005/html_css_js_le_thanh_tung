function isStrongPassword() {
    let password = prompt("Nhap passsword: ");
    let hastoUpperCase = false;
    let hastoLowerCase = false;
    let hastoNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (password.length < 8) {
            return false;
        }
        if (password[i] >= "A" && password[i] <= "Z") {
            hastoUpperCase = true;
        }
        if (password[i] >= "a" && password[i] <= "z") {
            hastoLowerCase = true;
        }
        if (password[i] >= "0" && password[i] <= "9") {
            hastoNumber = true;
        }
    }
    if (hastoLowerCase && hastoNumber && hastoUpperCase) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}
isStrongPassword();