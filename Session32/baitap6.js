let r = 24;

function big() {
    document.getElementById("text").style.fontSize = r + "px";
    r += 24;
}

function small() {
    r = r - 24;
    document.getElementById("text").style.fontSize = r + "px";

}