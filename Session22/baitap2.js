let arr = [2, 5, 7, 4, 1, 8, 6];
let number = prompt("Nhập 1 kí tự bất kì");
let flag = 0;
if (Number.isInteger(Number(number))) {
    for (let i = 0; i < arr.length; i++) {
        if (Number(number) == arr[i]) {
            flag++;
            break;
        }
    }
}
console.log(flag != 0 ? "Bingo" : "Chúc bạn may mắn lần sau");