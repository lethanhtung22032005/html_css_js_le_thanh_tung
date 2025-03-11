function isPrime(n) {
    if (Number.isInteger(n) && n > 0) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return console.log("Khong la so nguyen to");
            }
        }
    } else {
        console.log("Du lieu khong hop le");
        return;

    }
    console.log("La so nguyen to");
}
isPrime("A")