let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test2 = [];
let test3 = "abc";
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong co phan tu nao");
        }
        let result = arr.filter((item) => {
            return isPrime(item);
        })
        console.log(result
        );
    } else {
        console.log("Du lieu khong hop le");
    }
}
filter(test1);
filter(test2);
filter(test3);