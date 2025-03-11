function numberEven(arr) {
    if (Array.isArray(arr) == false) {
        console.log("Du lieu khong hop le");
        return;
    }
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    if (even.length == 0) {
        console.log("Khong co so chan");
        return;
    } else {
        return console.log(even);
    }

}
numberEven()