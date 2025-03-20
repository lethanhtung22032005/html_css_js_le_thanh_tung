let flag = document.getElementsByTagName("p");
function check() {
    let text = document.getElementById("email").value.trim();
    console.log(text);
    if (text.endsWith(".com" || ".vn") && text.includes("@")) {
        flag[0].classList.remove("hide");
        flag[1].classList.add("hide");

    } else {
        flag[1].classList.remove("hide");
        flag[0].classList.add("hide");
    }
}