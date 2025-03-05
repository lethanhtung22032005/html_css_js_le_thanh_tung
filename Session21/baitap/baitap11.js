let day = parseInt(prompt("Moi ban nhap ngay sinh cua minh:"));
let month = parseInt(prompt("Moi ban nhap thang sinh cua minh"));
let text = " ";

if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    text = "Bach Duong";
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    text = "Kim Nguu";
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    text = "Song Tu";
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    text = "Cu Giai"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    text = "Cu Giai"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    text = "Su Tu"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    text = "Xu Nu"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    text = "Thien Binh"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    text = "Bo Cap"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    text = "Nhan Ma"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    text = "Ma Ket"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    text = "Bao Binh"
    document.write(`Cung cua ban la: ${text}`);
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    text = "Song Ngu"
    document.write(`Cung cua ban la: ${text}`);

} else {
    document.write(`sai roi`);
}