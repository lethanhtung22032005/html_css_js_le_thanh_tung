function filterProduct() {
    let dish = [
        { name: "rau sach", category: "do an" },
        { name: "thit lon", category: "do an" },
        { name: "pepsi khong calo", category: "nuoc" },
        { name: "cocacola", category: "nuoc" },
        { name: "co le", category: "dung cu" },
        { name: "tuy vit", category: "dung cu" }
    ];
    let categorySelect = document.getElementById("categorySelect").value;
    let dishh = document.getElementById("productList");
    dishh.innerHTML = "";
    let arrProduct = dish.filter((item) =>
        item.category === categorySelect);
    let element = "";
    arrProduct.forEach(item => {
        element += `<li><b>Ten do an: </b>${item.name}-<b>Danh muc:</b>${item.category}</li>`
    });
    dishh.innerHTML = element;


}