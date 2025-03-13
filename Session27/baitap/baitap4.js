let choice;
let listNumber = [];
do {
    console.log("1.Nhap danh sach so nguyen");
    console.log("2.Tinh trung binh cac so");
    console.log("3.Tim so chan lon nhat");
    console.log("4.Tim so le nho nhat");
    console.log("5.Thoat");
    choice = +prompt("Nhap lua chon cua ban");
    switch (choice) {
        case 1:
            //Nhap danh sach so nguyen
            inputNumber();
            console.log(listNumber);
            break;
        case 2:
            console.log("Trung binh: ", average(listNumber));
            break;
        case 3:
            console.log(`So chan lon nhat:${maxEven(listNumber)}`);
            break;
        case 4:
            console.log(`So le nho nhat:${minOdd(listNumber)}`);
            break;
        case 5:
            break;
        default:
            console.log("Vui long nhap lua chon hop le");
    }
} while (choice != 5)
function inputNumber() {
    let num = +prompt("Ban muon them vao may phan tu: ");
    for (let i = 0; i < num; i++) {
        let input = +prompt(`Nhap phan tu thu ${i + 1}: `);
        listNumber.push(input);
    }
}
function average(arr) {
    let total = arr.reduce((acc, item) => acc + item, 0);
    return total / arr.length;
}
function maxEven(arr) {
    let even = arr.filter((item) => item % 2 == 0);
    return Math.max(...even);
}
function minOdd(arr) {
    let Odd = arr.filter((item) => item % 2 !== 0);
    return Math.min(...Odd);
}