let test1 = [1, 2, 3, 4, 5, 6, 7, 8]
let n = 3
let test2 = [1, 2, 3, 4, 5, 6, 7, 8]
let nn = 2;
let test3 = "abc";
function chuckArr(arr, n) {
    let result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i += n) {
            result.push(arr.slice(i, i + n));
        }
        return result;
    } else {
        console.log("Du lieu khong le");
    }
}
console.log(chuckArr(test1, n));
console.log(chuckArr(test2, nn));
chuckArr(test3);