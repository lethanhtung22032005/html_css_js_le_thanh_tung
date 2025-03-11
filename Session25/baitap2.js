function sum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        console.log("Du lieu khong hop le");
    }
    console.log(`Tong cua 2 so ${a} va ${b} la : `, sum);
}
console.log("ket qua: ", sum(5, 6));