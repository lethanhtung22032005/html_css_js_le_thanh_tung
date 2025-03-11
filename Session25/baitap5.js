function count(num) {
    let countt = 0;
    for (let i = 0; i < num.length; i++) {
        if (Number.isInteger(num[i]) && num[i] > 0) {
            countt++;
        }
    }
    countt == 0 ? console.log("Khong co so nguyen duong trong mang")
        : console.log("Co " + countt + " so nguyen duong");
}
count([1.2, -10]);