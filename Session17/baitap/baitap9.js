let numberA = Number(prompt("Mời bạn nhập số a"));
let numberB = Number(prompt("Mời bạn nhập số b"));
let numberC = Number(prompt("Mời bạn nhập số C"));
if (numberA < 0) {
    console.log("Mời bạn nhập lại hệ số a");
} else {
    let deltal = Math.pow(numberB, 2) - (4 * (numberA * numberC));
    let x1 = (Math.sqrt(deltal) - numberB) / (2 * numberA);
    let x2 = (-Math.sqrt(deltal) - numberB) / (2 * numberA);
    console.log("X1= :" + x1);
    console.log("X2= :" + x2);
}