let test1 = [2, 5, 10];
let test2 = [];
let test3 = "abc";
function number(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong co du lieu");
            return;
        }
        let result = arr.map((item) => {
            return item * item;
        }).filter((element) => {
            return element % 2 === 0;
        });
        console.log(result);
    } else {
        console.log("Du lieu khong hop le");
    }
}
number(test1);
number(test2);
number(test3);