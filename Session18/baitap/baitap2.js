let numBer1 = prompt("Mời bạn nhập điểm toán");
let numBer2 = prompt("Mời bạn nhập điểm văn");
let numBer3 = prompt("Mời bạn nhập điểm anh");
numBer1 = parseFloat(numBer1);
numBer2 = parseFloat(numBer2);
numBer3 = parseFloat(numBer3);
let trungBinhMon = (numBer1 + numBer2 + numBer3) / 3;

if (trungBinhMon >= 8) {
    console.log("Giỏi");
} else if (trungBinhMon >= 6.5 && trungBinhMon < 8) {
    console.log("Bạn xếp loại khá");
} else if (trungBinhMon >= 5.0 && trungBinhMon < 6.5) {
    console.log("Bạn xếp loại trung bình");
} else {
    console.log("Trung bình môn là: " + trungBinhMon);
}  