let n = Number(prompt("nhap so bat ki:"));
let f = 0;
if (Number.isInteger(n)) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i)
            f++;
        }
    }
    console.log(f);
    if (f === 2) {
        document.write("la so nguyen to");
    } else {
        document.write("khong phai la so nguyen to");
    }
} else {
    document.write(`khong phai la so`);
}