function findMin(arr) {
    if (Array.isArray(arr) == false) {
        console.log("Gia tri khong hop le");
        return;
    }
    if (arr.length == 0) {
        console.log("Mang khong chua phan tu");
        return;
    }
    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (minElement > arr[i]) {
            minElement = arr[i];
        }
    }
    return console.log("Phan tu nho nhat co gia tri la: ", minElement);
}
findMin("zvds");