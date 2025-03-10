let str = "";
let option;

do {

    option = +prompt(`Chọn chức năng:
    1. Nhập chuỗi
    2. Hiển thị chuỗi
    3. Tính độ dài của chuỗi
    4. Đếm số lần xuất hiện của một ký tự
    5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
    6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
    7. Thoát chương trình`);

    switch (option) {
        case 1:

            str = prompt("Nhập chuỗi: ");
            break;

        case 2:
            console.log("Chuỗi hiện tại: ", str);
            break;

        case 3:

            console.log("Độ dài của chuỗi là: ", str.length);
            break;

        case 4:

            let charToCount = prompt("Nhập ký tự cần đếm: ");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === charToCount) {
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của ký tự "${charToCount}" là: ${count}`);
            break;

        case 5:

            let reversedStr = str.split("").reverse().join("");
            if (str === reversedStr) {
                console.log("Chuỗi là đối xứng.");
            } else {
                console.log("Chuỗi không phải là đối xứng.");
            }
            break;

        case 6:
            let words = str.split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
            }
            str = words.join(" ");
            console.log("Chuỗi sau khi chuyển đổi: ", str);
            break;

        case 7:

            alert("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
} while (option !== 7);