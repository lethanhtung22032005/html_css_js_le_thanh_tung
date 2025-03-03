let n = Number(prompt("nhap mot thang bat ki:"));

if (n >= 1 && n <= 3) {
    document.write(n + " la mua xuan");
} else if (n >= 4 && n <= 6) {
    document.write(n + " la mua ha");
} else if (n >= 7 && n <= 9) {
    document.write(n + " la mua thu");
} else if (n >= 10 && n <= 12) {
    document.write(n + " la mua dong");
} else {
    document.write(n + " khong hop le");
}