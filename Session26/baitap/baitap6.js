let test1 = ["2025-03-10", "2024-12-25", "2023-07-01"];
let test2 = [];
let test3 = "abc";
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mang khong co phan tu nao");
        }
        let date = arr.map((item) => {
            let result = item.split("-");
            let day = parseInt(result[2]);
            let month = parseInt(result[1]);
            let year = parseInt(result[0])
            return `${day}/${month}/${year}`;
        })
        console.log(date);
    } else {
        console.log("Du lieu khong hop le");
    }
}
filter(test1);
filter(test2);
filter(test3);