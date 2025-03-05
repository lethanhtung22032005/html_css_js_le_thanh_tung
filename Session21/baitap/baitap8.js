for (let i = 100; i < 1000; i++) {
    let sum = 0;
    let temp = i;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    if (sum === i) {
        document.write(i + "<br>");
    }
}