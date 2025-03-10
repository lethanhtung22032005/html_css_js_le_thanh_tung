let choice;
let num = [];
let n = 0;
do {
    console.log("1.Nhap mang so nguyen");
    console.log("2.Hien thi mang");
    console.log("3.Tim phan tu lon nhat trong mang va in ra chi so cua no: ");
    console.log("4.Tinh tong tong va trung binh con cua cac so duong trong mang");
    console.log("5.Dao nguoc mang");
    console.log("6.Kiem tra mang co doi xung khong");
    console.log("7.Thoat chuong trinh");
    choice = +prompt("Moi nhap lua chon: ");
    switch (choice) {
        case 1:
            n = +prompt("Ban muon nhap may phan tu vao mang: ");
            for (let i = 0; i < n; i++) {
                let input = +prompt("Nhap phan tu thu " + (i + 1) + ": ")
                num.push(input);
            }
            break;
        case 2:
            if (n == 0) {
                console.log("Mang rong");
            } else {
                console.log("Cac phan tu trong mang la: ", num);
            }
            break;
        case 3:
            let max = num[0];
            let maxIndex;
            for (let i = 1; i < num.length; i++) {
                if (max < num[i]) {
                    max = num[i];
                    maxIndex = i;
                }
            }
            console.log("Phan tu lon nhat: ", max);
            console.log(("Chi so cua no: ", maxIndex));
            break;
        case 4:
            let count = 0;
            let sum = 0
            let average = 0;
            for (let i = 0; i < num.length; i++) {
                if (num[i] > 0) {
                    sum += num[i];
                    count++;
                }
            }
            average = sum / count;
            console.log("Tong: ", sum);
            console.log(("Trung binh cong: ", average));
            break;
        case 5:
            num.sort((a, b) => b - a);
            console.log("Mang sau khi duoc dao nguoc: ", num);
            break;
        case 6:
            let flag = true;
            for (let i = 0; i < Math.round(num.length / 2); i++) {
                if (num[i] !== num[num.length - 1 - i]) {
                    flag = false;
                    break;
                }
            }
            flag ? console.log("Mang doi xung") : console.log("Khong phai mang doi xung");
            break;
        case 7:
            break;
        default:
            console.log("Nhap lua chon hop le: ");

            break;
    }

} while (choice != 7);