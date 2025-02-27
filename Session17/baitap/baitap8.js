let day1 = prompt("ngay thu nhat:(YYYY-MM-DD)");
let day1A = new Date(day1);
console.log(day1A);
let day2 = prompt("ngay thu nhat:(YYYY-MM-DD)");
let day2A = new Date(day2);
console.log(day2A);
let f = Math.abs(day1A - day2A) / (1000 * 60 * 60 * 24);
let s = f.toFixed(0)
console.log("Do lech la: " + f + " ngay");