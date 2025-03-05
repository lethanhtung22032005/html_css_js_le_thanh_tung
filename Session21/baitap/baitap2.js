let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt("Nhập vào số nguyên thứ " + (i + 1) + ":"));

    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

document.write(`Số lượng số chẵn: ${evenCount} <br>`);
document.write(`Số lượng số lẻ: ${oddCount}`);  