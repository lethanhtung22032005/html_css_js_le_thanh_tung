let choise = Number(prompt("ban muon doi tien loai nao (1.vnd/2.usd)"));
if (choise === 1) {
    let n = Number(prompt("so tien ban muon doi USD -> VND"));
    let f = n * 23000;
    document.write("so tien ban doi duoc se la : " + f + " VND");
} else if (choise === 2) {
    let m = Number(prompt("so tien ban muon doi VND -> USD"));
    let d = m / 23000;
    let d2 = d.toFixed(2);
    document.write("so tien ban doi duoc se la : " + d2 + " USD");
} else {
    document.write("thao tac loi");
}