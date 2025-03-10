let arr = [];
let choice;
do {
    console.log("1.Nhap mang 2 chieu");
    console.log("2.Hien thi mang 2 chieu");
    console.log("3.Tinh tong cac phan tu trong mang");
    console.log("4.Tim phan tu lon nhat trong mang va chi so cua no");
    console.log("5.Tinh trung binh cong cac phan tu cua mot hang cu the");
    console.log("6.Dao nguoc cac hang trong mang");
    console.log("7.Thoat chuong trinh");
    choice = +prompt("Nhap lua chon cua ban: ");
    switch (choice) {
        case 1:
            let rows = +prompt("Nhap vao so hang: ");
            let cols = +prompt("Nhap vao so cot");
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +prompt("Nhap phan tu thu " + i + j + ": ");
                }
            }
            break;
        case 2:
            let result = "";
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    result += arr[i][j] + "\t";
                }
                result += "\n";
            }
            console.log(result);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("tong cac so trong mang la: ", sum);
            break;
        case 4:
            let max = arr[0][0];
            let indexMax = " row: 0, cols:0 ";
            for (let i = 0; i < arr.length; i++) {
                for (j = 0; j < arr[i].length; j++) {
                    if (max < arr[i][j]) {
                        max = arr[i][j];
                        indexMax = "rows:" + i + ", cols:" + j + "";
                    }
                }
            }
            console.log("Phan tu lon nhat trong mang la: ", max);
            console.log("Vi tri cua phan tu la: ", indexMax);
            break;
        case 5:
            let n = +prompt("Ban muon tinh trung binh cong cua hang nao: ");
            let total = 0;
            for (let i = 0; i < arr[n].length; i++) {
                total += arr[n][i];
            }
            average = total / arr[n].length;
            console.log("Tong trung binh cong cua hang " + n + " la: ", average);
            break;
        case 6:
            arr.reverse();
            console.log("Da dao nguoc cac hang trong mang");
            break;
        case 7:
            break;
        default:
            console.log("Nhap vao lua chon hop le");
            break;
    }

} while (choice !== 7)