let arr = [];
let num = +prompt("Moi ban nhap do dai cua mang");
let count = 0;
if (num < 0) {
    document.writeln("So luong phan tu nhap khong hop le")
} else if (num == 0) {
    document.writeln("Mang khong co phan tu");
} else {
    arr[num];
    for (let i = 0; i < num; i++) {
        arr[i] = +prompt("Moi ban nhap phan tu vao trong mang" + (i + 1));
    }
    for (let i = 0; i < num; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    document.writeln(count);
}