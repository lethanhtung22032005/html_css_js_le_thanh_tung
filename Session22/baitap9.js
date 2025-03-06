let arr = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
    }
}
newArr.sort((a, b) => a - b);
console.log(newArr.join(","));