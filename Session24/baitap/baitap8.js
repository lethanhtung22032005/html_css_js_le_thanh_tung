let str = "";
let continueProgram = true;

while (continueProgram) {
    let choice = prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n" +
        "4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n" +
        "5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n" +
        "6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n" +
        "7. Thoát chương trình"
    );

    switch (choice) {
        case "1":
            str = prompt("Nhập chuỗi ký tự:");
            break;

        case "2":
            console.log("Chuỗi bạn nhập là: " + str);
            break;

        case "3":
            let words = str.split(" ");
            let wordCount = {};
            for (let i = 0; i < words.length; i++) {
                let word = words[i].toLowerCase();
                wordCount[word] = (wordCount[word] || 0) + 1;
            }

            console.log("Số lần xuất hiện của mỗi từ: ");
            for (let word in wordCount) {
                console.log(word + ": " + wordCount[word] + " lần");
            }
            break;

        case "4":
            let wordLengths = str.split(" ").map(word => word.length);
            let maxLength = Math.max(...wordLengths);
            let minLength = Math.min(...wordLengths);

            let longestWords = str.split(" ").filter(word => word.length === maxLength);
            let shortestWords = str.split(" ").filter(word => word.length === minLength);

            console.log("Từ dài nhất: " + longestWords.join(", "));
            console.log("Từ ngắn nhất: " + shortestWords.join(", "));
            break;

        case "5":
            let charCount = {};
            for (let i = 0; i < str.length; i++) {
                let char = str[i].toLowerCase();
                charCount[char] = (charCount[char] || 0) + 1;
            }

            let maxChar = '';
            let maxCount = 0;
            for (let char in charCount) {
                if (charCount[char] > maxCount) {
                    maxCount = charCount[char];
                    maxChar = char;
                }
            }

            console.log("Ký tự xuất hiện nhiều nhất: '" + maxChar + "' với " + maxCount + " lần.");
            break;

        case "6":
            let snakeCaseStr = str.split(" ").join("_").toLowerCase();
            console.log("Chuỗi sau khi chuyển sang snake_case: " + snakeCaseStr);
            break;

        case "7":
            console.log("Thoát chương trình.");
            continueProgram = false;
            break;

        default:
            console.log("Chọn sai chức năng. Vui lòng chọn lại.");
    }
}