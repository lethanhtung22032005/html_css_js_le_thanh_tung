let number = prompt("Nhập vào một dãy số : ");
let flag = true;
let arr = number.split("");
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        console.log("Day khong hop le");
        break;
    } else {
        flag = false;
    }
}
if (!flag) {
    arr.reverse();
    console.log(arr.join(""));
}