let test1 = [1, 2, 3, 5];
let test2 = [1, 2, 4, 5];
let test3 = "abc";
function check(arr) {
    if (Array.isArray(arr)) {
        let n = arr.length + 1;
        const first = arr[0];
        const last = arr.at(-1);
        let currentSum = (n * (first + last)) / 2;
        let sum = arr.reduce((acc, item) => acc + item, 0);
        return currentSum - sum;
    } else {
        console.log("Du lieu khong hop le");
    }
}
console.log(check(test1));
console.log(check(test2));
check(test3);