let test1 = ["apple", "banana", "cat", "elephant", "dog"];
let test2 = [];
let test3 = "abc";
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong co phan tu nao");
            return;
        }
        let result = arr.filter((item) => {
            return item.length > 5
        })
        console.log(result);
    } else {
        console.log("Du lieu khong hop le");
    }
}
filter(test1);
filter(test2);
filter(test3);