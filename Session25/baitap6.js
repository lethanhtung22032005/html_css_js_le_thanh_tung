function isPanlindrome() {
    let 
    
} function isPalindrome() {
    let input = prompt("Nhap chuoi: ");
    let flag = 1;
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] != input[input.length - 1 - i]) {
            flag = 0;
            break;
        }
    }
    if (flag === 1) {
        console.log("La chuoi doi xung");
    } else {
        console.log("Khong la chuoi doi xung");

    }
}

isPalindrome();