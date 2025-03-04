let n = parseInt(prompt("Nhap n so nguyen to: "));
let num = 2;
let count = 0;

if (n < 0) {
    document.write("So khong hop le")
} else {
    while (count < n) {
        let flag = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            document.write(" ", num);
            count++;
        }
        num++;
    }
}