let inputChar = prompt("Nhập một ký tự:");
let doDai = inputChar.length;
if (doDai > 1) {
    if (inputChar.indexOf(0 && 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9) == -1) {
        console.log(inputChar);
        document.write("khong phai la mot chu");
    } else {
        document.write("la mot chu");
    }
} else {
    document.write("khong phai chu");
}

// if(doDai>1){
//    document.write(inputChar + " không phải là một chữ cái.");
// }else{
//     if ((inputChar >= 'a' && inputChar <= 'z') || (inputChar >= 'A' && inputChar <= 'Z')) {
//        document.write(inputChar + " là một chữ cái.");
//     } else {
//        document.write(inputChar + " không phải là một chữ cái.");
//     }
// }