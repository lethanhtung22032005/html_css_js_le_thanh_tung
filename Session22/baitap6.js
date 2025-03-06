let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let search = prompt("Nhap mot so bat ki: ");
let flag = true;
let appear = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == search) {
        appear += 1;
    }
}
if (flag) {
    console.log("So " + search + " xuat hien " + appear + " trong mang");
} else {
    console.log("So " + search + " khong ton tai trong mang");
}