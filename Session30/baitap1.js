
let product = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc King"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc King"
    }
    
];
let cart=[];
let choice;
do {
    console.log(`
        1.Hiển thị các sản phẩm theo tên danh mục.
        2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
        4.Tính số tiền thanh toán trong giỏ hàng.
        5.Thoát.`)
    switch (choice = +prompt("Mời bạn nhập lựa chọn của mình")) {
        case 1:
            showProduct();
            break;
        case 2:
            choseProducts()
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:
            
            break;
        case 6:
            break;
        default:
            break;
    }
    
} while (choice !== 6)
function showProduct() {
    let chose = +prompt(`Mời bạn nhập lựa chọn
            1: Các món dân tộc King
            2: Các món dân tộc Mông`)
    if (chose==1) {
        let abc = product.filter(product => product.category == "món ăn dân tộc King");
        console.log(abc);
    } else if (chose == 2) {
        let adc = product.filter(product => product.category == "món ăn dân tộc Mông");
        console.log(adc);
    }
    else {
        console.log("Lựa chọn không hợp lệ")
    }
}
//Hàm chọn mua sản phẩm
function choseProducts() {
    let choseId = +prompt(`Mời bạn nhập id sản phẩm `);
    let shop = product.findIndex(product => product.id == choseId);
    if (shop == -1) {
        console.log(`Sản phẩm không có trong giỏ hàng`);
    }
    else {
        let choseQuantity = +prompt(`Mời bạn nhập số lượng bạn muốn mua`);
        if (product[shop].quantity < choseQuantity) {
            console.log(`Sản phẩm chỉ còn ${product[shop].quantity}`);
        } else {
            product[shop].quantity -= choseQuantity;
            let index = cart.findIndex(item => item.id == choseId);
            if (index == -1) {
                cart.push({
                    id: choseId,
                    name: product[shop].name,
                    quantity: choseQuantity,
                    price: product[shop].price,
                    category:product[shop].category,
                })
                console.log(cart);
                //cart.push({...products[shop],quantity:choseQuantity});
            } else {
                cart[index].quantity += choseQuantity;
                console.log(cart);
            }
        }
    }
}
function handleSort() {
    let 
} 
