let choice;
let firstNum;
let secondNum;
do {
    console.log("1.Cong 2 so");
    console.log("2.Tru 2 so");
    console.log("3.Nhan 2 so");
    console.log("4.Chia 2 so");
    console.log("5.Thoat 2 so");
    choice = +prompt("Moi ban nhap lua chon: ");
    switch (choice) {
        case 1:
            firstNum = +prompt("Nhap so thu 1: ");
            secondNum = +prompt("Nhap so thu 2: ");
            console.log(total(firstNum, secondNum));
            break;
        case 2:
            firstNum = +prompt("Nhap so thu 1: ");
            secondNum = +prompt("Nhap so thu 2: ");
            console.log(minus(firstNum, secondNum));
            break;
        case 3:
            firstNum = +prompt("Nhap so thu 1: ");
            secondNum = +prompt("Nhap so thu 2: ");
            console.log(multi(firstNum, secondNum));
            break;
        case 4:
            firstNum = +prompt("Nhap so thu 1: ");
            secondNum = +prompt("Nhap so thu 2: ");
            console.log(divide(firstNum, secondNum));
            break;
        case 5:
            break;
        default:
            console.log("Moi nhap lua chon hop le");
    }
} while (choice != 5)
function total(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}