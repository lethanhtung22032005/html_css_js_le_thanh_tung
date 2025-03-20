
let button = document.getElementById("clickButton");
let counterDisplay = document.getElementById("clickCount");


let count = 0;

button.addEventListener("click", function () {
    count++;
    counterDisplay.textContent = "so lan click: " + count;
});