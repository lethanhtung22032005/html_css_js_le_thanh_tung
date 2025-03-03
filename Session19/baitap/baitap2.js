const char = prompt("Xin mời nhập ký tự");
if (/^[a-zA-Z]$/.test(char)) {
    alert(`${char} là chữ cái`);
} else {
    alert(`Ký tự ${char} không phải chữ cái`);