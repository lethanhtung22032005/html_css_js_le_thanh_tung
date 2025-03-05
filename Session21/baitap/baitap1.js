 let numbers = [];
for (let i = 0; i < 5; i++) {
    let input = prompt(`Nhập số nguyên thứ ${i + 1}:`);
    numbers.push(parseInt(input, 10));
}
let sumOdd = 0;
for (let num of numbers) {
    if (num % 2 !== 0) {
        sumOdd += num;
    }
}
console.log(`Tổng các số lẻ là: ${sumOdd}`);  