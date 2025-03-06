let number = prompt("Nhap vao day so bat ki: ");
let arr = number.split("");
let flag = true;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        console.log("Day so khong hop le");
        break;
    } else {
        flag = false;
    }
}
if (!flag) {
    let max = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    console.log("" + max + " la so lon nhat");
}