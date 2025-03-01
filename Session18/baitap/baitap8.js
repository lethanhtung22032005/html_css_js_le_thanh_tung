function checkTriangle(a, b, c) { 
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Tam giác đều";
        } else if (a === b || a === c || b === c) {
            return "Tam giác cân";
        } else { 
            const sides = [a, b, c].sort((x, y) => x - y);
            const [x, y, z] = sides;
            if (x * x + y * y === z * z) {
                return "Tam giác vuông";
            }
            return "Tam giác thường";
        }
    } else {
        return "Không phải là tam giác hợp lệ";
    }
}
function inputTriangleSides() {
    const a = parseFloat(prompt("Nhập độ dài cạnh a:"));
    const b = parseFloat(prompt("Nhập độ dài cạnh b:"));
    const c = parseFloat(prompt("Nhập độ dài cạnh c:"));
    const result = checkTriangle(a, b, c);
    alert(result);
}
inputTriangleSides();  