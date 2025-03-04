let number = prompt("Nhap vao mot chuoi so nguyen: ");
let length = number.length;
let isPalindrome = true;
if (isNaN(number)) {
    document.write("So khong hop le");
} else {
    for (let i = 0; i < length / 2; i++) {
        if (number.charAt(i) !== number.charAt(length - 1 - i)) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        document.write("La so doi xung");
    } else {
        document.write("Khong la so doi xung");
    }
}