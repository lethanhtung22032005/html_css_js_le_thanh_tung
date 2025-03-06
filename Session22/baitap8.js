let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];//khai bao mot mang voi 10 phan tu
let countArr = [];//tao mot moi mang de luu so lan xuat hien cua phan tu trong mang
let length = arr.length;

for (let i = 0; i < length; i++) { //dem so lan xuat hien cua phan tu trong mang
    let element = arr[i];
    if (countArr[element] == undefined) {//neu phan tu chua xuat hien lan nao thi gan la 1
        countArr[element] = 1;
    } else {
        countArr[element]++; //neu phan tu da xuat hien roi thi tang len so lan xuat hien 
    }
}

let max = 0;
let minElement = 0;
for (let i = 0; i < countArr.length; i++) { //kiem tra xem phan tu nao xuat hien nhieu nhat 
    if (countArr[i] > max) {
        max = countArr[i];
        minElement = i;
    } else if (countArr[i] == max && i < minElement) {//neu xuat hien bang nhau thi them dieu kien nho hon
        minElement = i;
    }
}
console.log("So xuat hien nhieu nhat trong mang la: ", minElement);