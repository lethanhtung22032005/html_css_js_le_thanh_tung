// const textElement = document.getElementById("text");
// const hideButton = document.getElementById("hideBtn");
// const showButton = document.getElementById("showBtn");

// hideButton.addEventListener("click", function () {
//     textElement.style.display = "none";
// });

// showButton.addEventListener("click", function () {
//     textElement.style.display = "block";
// });

let text = document.getElementsByTagName("h1");

function hideText() {
    text[0].classList.add("hide_text");
}

function showText() {
    text[0].classList.remove("hide_text");
}