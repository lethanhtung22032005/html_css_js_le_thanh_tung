let n = Number(prompt("moi ban nhap so bat ki:"));
if (n % 3 === 0 && n % 5 === 0) {
    document.write(n + " la so chia het cho ca 3 va 5");
} else {
    document.write(n + " khong phai la so chia het cho ca 3 va 5");
}