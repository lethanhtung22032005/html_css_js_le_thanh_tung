let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = prompt("Moi ban nhap phan tu vao trong mang");
}
for (let i = 0; i < 10; i++) {
    if (arr[i] > 10) {
        document.writeln(arr[i])
    }
}