let input1 = Number(prompt("Mời bạn nhập số tiền gửi"));
let input2 = Number(prompt("Mời bạn nhập số tháng gửi"));
let tongTienLai = (input1 * 0.043) * input2 / 12;
console.log(tongTienLai);
console.log("Bạn gửi số tiền là: ", input1);
console.log("Bạn gửi: " + input2 + " tháng, tiền lãi là " + tongTienLai.toFixed(2) + " VNĐ.");