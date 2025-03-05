let n = Number(prompt("nhap so bat ki:"));

if (Number.isInteger(n)) {
    for (let i = 1; i <= Math.abs(n); i++) {
        if (n % i === 0) {
            document.write(i + "<br>");
        }
    }
} else {
    document.write(`loi thao tac`);
}