function openModal(img) {
    document.getElementById("modalImage").src = img.src;
    document.getElementById("imageModal").style.display = "flex";

}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}