let month = prompt("Nhập vào tháng (1-12):");
let days;

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    days = 31;
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    days = 30;
} else if (month == 2) {
    let year = prompt("Nhập vào năm:");
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29; 
    } else {
        days = 28;
    }
} else {
    days = "Tháng không hợp lệ"; 
}

alert("Số ngày của tháng " + month + " là: " + days);  