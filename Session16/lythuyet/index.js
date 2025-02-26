// let text = prompt("mời bạn nhập giá trị");
// console.log("giá trị người dùng vừa nhập",text);

/*
viết chương trình cho người dùng nhập vào 2 số bất kì 
tính tổng 2 số đó.
1. khi cho người dùng nhập phải dùng prompt
2. tạo biến để lấy giá trị người dùng nhập
*/
/*
    var có từ khi js ra đời (1995)
    let (ra đời phiên bản ES6_2015)
    const
*/
// let numberA = prompt("mời bạn nhập số thứ nhất");
// let numberB = prompt("mời bạn nhập số thứ hai");
// let sum = numberA + numberB;
// // console.log("giá trị của 2 số vừa nhập là:",sum)
// let numberC = "5";
// // let numberD = Number(numberC);
// console.log("kiểu giá trị của numberD là", typeof (number/*  */C));

let number1 = +prompt("mời bạn nhập điểm toán");
let number2 = +prompt("mời bạn nhập điểm lí");
let number3 = +prompt("mời bạn nhập điểm hóa");
let avg = (number1 + number2 + number3) / 3;
console.log("điểm trung bình của 3 môn toán lí hóa là:", avg);