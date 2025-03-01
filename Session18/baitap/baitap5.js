let year = parseInt(prompt("moi ban nhap so nam kinh nghiem"));

if (year < 1) {
    console.log("Moi vao nghe");

} else if (1 < year && year < 3) {
    console.log("Nhan vien co kinh nghiem ");

} else if (4 < year && year < 6) {
    console.log("Chuyen vien");

} else if (year > 6) {
    console.log("Quan ly");

}