let n = +prompt("Nhap mot so n: ");
let a = 1;
let b = 1;
if (isNaN(n)) {
    document.write("Khong hop le");
} else {
    if (n >= 1) {
        document.write(a);
    }
    if (n >= 2) {
        document.write(" ", b);
    }
    for (let i = 2; i < n; i++) {
        let result = a + b;
        document.write(" ", result);
        a = b;
        b = result;
    }

}