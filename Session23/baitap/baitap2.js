let arr = [];
arr = [1, 5, 2, 8, 3, 9, 4, 7, 6, 0];
if (arr.length === 0) {
    console.log("Không có số lớn nhất");
} else {
    let max = arr[0];
    let viTri = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            viTri = i;
        }
    }

    console.log("Số lớn nhất: " + max);
    console.log("Vị trí: " + viTri);
}  