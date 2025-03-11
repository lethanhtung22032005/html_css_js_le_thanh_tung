function toUpperCasee(arr) {
    let words = arr.split(" ");
    console.log(words);
    let result = ""
    for (let i = 0; i < words.length; i++) {
        let word = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        result += word + " "
    }
    return console.log(result);

}
toUpperCasee("aGFBHn nHung");