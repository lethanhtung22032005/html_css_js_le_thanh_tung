let year = parseInt(prompt("moi ban nhap vao so nam"))

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' la nam nhuan');
} else {
    console.log(year + ' khong phai la nam nhuan');
}