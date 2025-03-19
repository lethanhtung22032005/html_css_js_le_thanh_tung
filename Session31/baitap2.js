
let div = document.getElementsByTagName("div");
let btn = document.getElementsByTagName("button");
function tranforn() {
    div[0].classList.add("content");
    btn[1].classList.remove("but2");
    btn[0].classList.add("but2");
}

function tranforn2() {
    div[0].classList.remove("content");
    btn[0].classList.remove("but2");
    btn[1].classList.add("but2");
}
