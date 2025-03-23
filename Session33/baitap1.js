function showPass() {
    let element = document.getElementById("myInput");
    if (element.type == "password") {
        element.type = "text";
    } else {
        element.type = "password"
    }
}