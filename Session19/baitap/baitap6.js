let a = Number(prompt(" nhap so a trong phep tinh: ax^2+bx+c=0"));
let b = Number(prompt(" nhap so b trong phep tinh: ax^2+bx+c=0"));
let c = Number(prompt(" nhap so c trong phep tinh: ax^2+bx+c=0"));
let del = Math.pow(b, 2) - 4 * a * c;

let d = -b / (2 * a);
let x1 = (-b + Math.sqrt(del)) / (2 * a);
let x2 = (-b - Math.sqrt(del)) / (2 * a);
console.log(x1, x2);

if (del === 0) {
    document.write("phuong trinh co nghiem kep" + "<br>" + "x1=" + d + "<br>" + "x2=" + d);
} else if (del > 0) {
    document.write("phuong trinh co nghiem phan biet" + "<br>" + "x1=" + x1 + "<br>" + "x2=" + x2);
} else {
    document.write("phương trình vô nghiệm.");
}