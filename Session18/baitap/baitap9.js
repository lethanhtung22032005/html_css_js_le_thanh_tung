function convertTo12HourFormat(hours, minutes, seconds) {
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
    return formattedTime;
}
const hours = parseInt(prompt("Nhập giờ (0-23):"));
const minutes = parseInt(prompt("Nhập phút (0-59):"));
const seconds = parseInt(prompt("Nhập giây (0-59):"));
const isValid = (hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59) && (seconds >= 0 && seconds <= 59);

if (isValid) {
    const result = convertTo12HourFormat(hours, minutes, seconds);
    console.log("Thời gian định dạng 12 giờ: " + result);
} else {
    console.log("Giá trị nhập vào không hợp lệ. Hãy kiểm tra lại giờ, phút và giây.");
}  