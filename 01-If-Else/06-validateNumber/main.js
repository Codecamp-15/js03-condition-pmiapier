// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

// if (num === null || num.trim() === "" || isNaN(num)) {
//   alert("Invalid number");
// } else if (+num > 0) {
//   alert("Positive");
// } else if (+num == 0) {
//   alert("Zero");
// } else if (+num < 0) {
//   alert("Negative");
// }

let num1 = prompt("Give me a number please");
let num2 = prompt("Give me another number please");

if (
  num1 === null ||
  num1.trim() === "" ||
  isNaN(num1) ||
  num2 === null ||
  num2.trim() === "" ||
  isNaN(num2)
) {
  alert("invaild number");
} else {
  alert(num1 + num2);
}

//Done!
