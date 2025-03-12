let test1 = [10, 9, 5, 11, 24, 5];
let test2 = [];
let test3 = "abc";
function filter(arr) {
    let max;
    let position;
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong co phan tu nao");
        }
        max = Math.max(...arr);
        position = arr.indexOf(max);
        console.log("Phan tu lon nhat: ", max
        );
        console.log("Vi tri: ", position
        );
    } else {
        console.log("Du lieu khong hop le");
    }
}
filter(test1);
filter(test2);
filter(test3);