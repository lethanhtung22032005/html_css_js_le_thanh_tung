let choice;
let num = [];
do {
    console.log("1.Nhap mang 2 chieu");
    console.log("2.Hien thi mang 2 chieu");
    console.log("3.Tinh tong cac phan tu trong mang");
    console.log("4.Tinh tong duong cheo chinh");
    console.log("5.Tinh tong duong cheo phu");
    console.log(("6.Tinh trung binh cong cac phan tu trong mot hang hoac mot cot"));
    console.log("7.Thoat chuong trinh");
    choice = +prompt("Nhap lua chon cua ban: ");
    switch (choice) {
        case 1:
            let rows = +prompt("Nhap so hang: ");
            let cols = +prompt("Nhap so cot: ");
            for (let i = 0; i < rows; i++) {
                num[i] = [];
                for (let j = 0; j < cols; j++) {
                    num[i][j] = +prompt("Nhap phan tu thu " + i + " " + j + "");
                }
            }
            break;
        case 2:
            let result = "";
            for (let i = 0; i < num.length; i++) {
                for (j = 0; j < num[i].length; j++) {
                    result += num[i][j] + "\t"
                }
                result += "\n";
            }
            console.log(result);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < num.length; i++) {
                for (let j = 0; j < num[i].length; j++) {
                    sum += num[i][j];
                }
            }
            console.log("Tong cac phan tu trong mang la: ", sum);
            break;
        case 4:
            let = 0;
            for (let i = 0; i < num.length; i++) {
                for (let j = 0; j < num[i].length; j++) {
                    sum += num[i][j];
                }
            }
            console.log("Tong cac phan tu trong mang la: ", sum);
            break;
        case 5:
            let sumDiagonalMain = 0;
            if (num.length === num[0].length) {
                for (let i = 0; i < num.length; i++) {
                    sumDiagonalMain += num[i][i];
                }
                console.log("Tổng đường chéo chính: ", sumDiagonalMain);
            } else {
                console.log("Mảng không phải là mảng vuông, không có đường chéo chính.");
            }
            break;
        case 6:
            let sumDiagonalSecondary = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][arr.length - i - 1] !== undefined) {
                    sumDiagonalSecondary += arr[i][arr.length - i - 1];
                }
            }
            console.log("Tong duong cheo phu: ", sumDiagonalSecondary);
            break;
        case 7:
            let choice = +prompt("Bạn muốn tính trung bình của hàng (1) hay cột (2)?");

            if (choice === 1) {
                let rowIndex = +prompt("Nhập chỉ số hàng: ");
                if (rowIndex >= 0 && rowIndex < arr.length) {
                    let sumRow = 0;
                    for (let i = 0; i < arr[rowIndex].length; i++) {
                        sumRow += arr[rowIndex][i];
                    }
                    let averageRow = sumRow / arr[rowIndex].length;
                    alert(`Trung bình cộng của hàng ${rowIndex} là: ${averageRow}`);
                } else {
                    alert("Chỉ số hàng không hợp lệ.");
                }
            } else if (choice === 2) {
                let colIndex = +prompt("Nhập chỉ số cột: ");
                if (colIndex >= 0 && colIndex < arr[0].length) {
                    let sumCol = 0;
                    for (let i = 0; i < arr.length; i++) {
                        sumCol += arr[i][colIndex];
                    }
                    let averageCol = sumCol / arr.length;
                    alert(`Trung bình cộng của cột ${colIndex} là: ${averageCol}`);
                } else {
                    alert("Chỉ số cột không hợp lệ.");
                }
            } else {
                alert("Lựa chọn không hợp lệ.");
            }
            break;
        default:
            console.log("Vui long nhap tu 1=>7");
            break;
    }
} while (choice !== 7)