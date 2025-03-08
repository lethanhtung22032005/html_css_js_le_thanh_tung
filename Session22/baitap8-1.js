let number = [1, 6, 7, 1, 3, 4, 3, 9, 3, 1];
let maxCount = 0;
let minElement;
for (let i = 0; i < number.length; i++) {
    let count = 0;
    for (let j = 0; j < number.length; j++) {
        if (number[i] == number[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        minElement = number[i];
    }
}
console.log("So xuat hien nhieu nhat trong mang la: ", minElement);