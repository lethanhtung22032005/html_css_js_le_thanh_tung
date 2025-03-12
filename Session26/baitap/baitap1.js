let test1 = [1, 22, 33, 33, 54, 56, 23, 45, 6, 6];
let test2 = [];
let test3 = "abc";
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong chua phan tu");
            return;
        }
        let result = arr.filter((item) => {
            return item >= 10;
        })
        console.log(result);
    } else {
        console.log("dữ liệu không hợp lệ");
    }
}
filter(test1);
filter(test2);  
filter(test3);