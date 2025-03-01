let a = parseInt(prompt("moi ban nhap vao so a "));
let b = parseInt(prompt("moi ban nhap vao so b "));

let c = prompt("moi ban nhap cac dau phep tinh");

if (c == "+") {
    console.log("Ket qua cua phep tinh la:", c = a + b);
} else if (c == "-") {
    console.log("ket qua cua phep tinh la ", c = a - b)
} else if (c == "*") {
    console.log("Ket qua cua phep tinh la ", c = a * b);
} else if (c == "/") {
    console.log(" Ket qua cua phep tinh la ", c = a / b);
} else if (c == "**") {
    console.log(" Ket qua cua phep tinh la ", c = a ** b);
} else if (c == "%") {
    console.log(" Ket qua cua phep tinh la ", c = a % b);
}