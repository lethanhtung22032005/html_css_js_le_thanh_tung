let test1 = [2, 4, 6, 8];
let test2 = [3, 6, 9, 12, 14];
let test3 = "abc"
function arithmeticProgression(arr) {
    if (Array.isArray(arr)) {
        let space = arr[1] - arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] !== space) {
                console.log("FALSE");
                return;
            }
        }
        console.log("TRUE");
    } else {
        console.log("Du lieu khong hop le");
    }
}
arithmeticProgression(test1);
arithmeticProgression(test2);
arithmeticProgression(test3);