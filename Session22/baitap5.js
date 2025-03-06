let str = prompt("Nhap mot day so nguyen: ");
let arr = str.split("");
let flag = true;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        console.log("Day so khong hop le");
        flag = false;
        break;
    }
}
if (flag) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i]);
        if (num % 2 == 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    console.log("tong cac so chan: ", even);
    console.log("tong cac so le: ", odd);
}