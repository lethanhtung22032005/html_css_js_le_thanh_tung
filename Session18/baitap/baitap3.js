let name = prompt("moi ban nhap ten");

if (name === "ADMIN") {
    let password = prompt("Moi ban nhap pass");
    if (password === "TheMaster") {
        console.log("Welcome");
    } else if (password === "null") {
        console.log("Cancelled");
    } else {
        console.log("Wrong password");

    }

} else if (name === "null") {
    console.log("Cancelled");

} else {
    console.log("I don't know you");

}