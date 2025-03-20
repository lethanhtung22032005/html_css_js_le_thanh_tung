document.getElementById("changeColorButton").addEventListener("click", function () {
    let r = Math.floor(Math.random() * 9999);
    document.body.style.backgroundColor = "#" + r;
});