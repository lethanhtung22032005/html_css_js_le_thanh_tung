let a = Number(prompt("nhap so thu nhat"));
let b = Number(prompt("nhap so thu hai"));
let c = Number(prompt("nhap so thu ba"));
let n;
if (a > b) {
    n = a;
} else if (b > c) {
    n = b;
} else {
    n = c;
}
console.log(n);
document.write(n + " la so lon nhat trong ba so");