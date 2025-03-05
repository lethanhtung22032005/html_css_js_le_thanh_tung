let deposit = Number(prompt("nhap so tien muon gui:"));
let interRate = Number(prompt("nhap lai suat:"));
let m = Number(prompt("thoi gian muon gui (thang):"));

let money = (deposit * (Math.pow((1 + (interRate / 100)), m))).toFixed(3);
let nonMoney = (money - deposit).toFixed(3);

document.write("tien lai: " + nonMoney + "<br>");
document.write("tien nhan duoc: " + money);