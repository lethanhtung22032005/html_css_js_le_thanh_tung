let bg = document.getElementsByTagName("div");
console.log(bg[0]);

function red() {
    bg[0].classList.add("color1");
    bg[0].classList.remove("color2");
    bg[0].classList.remove("color3");
}
function blue() {
    bg[0].classList.add("color2");
    bg[0].classList.remove("color1");
    bg[0].classList.remove("color3");
}
function yellow() {
    bg[0].classList.add("color3");
    bg[0].classList.remove("color1");
    bg[0].classList.remove("color2");
}