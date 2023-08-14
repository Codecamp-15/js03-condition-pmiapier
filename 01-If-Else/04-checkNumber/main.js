// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
// - ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”
// - ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”
// - ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”
// - ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let num = prompt("Give me a number please");
//input : null, "", '          ', 'qjwqeowd', "12",
//null === null [ok]
//'', '         ', => str.trim() == ''
// 'qjwqeowd' => isNaN
console.log(num);
//starting to resolve the big problem firt
// Guard Clause
//สิ่งที่หลุดออกมาก่อน  null|| '       ' || 'sdfghkjhg' can't swicth the order of the condition

if (num === null || num.trim() === "" || isNaN(num)) {
  alert("Invalid number");
} else if (+num > 0) {
  alert("Positive");
} else if (+num == 0) {
  alert("Zero");
} else if (+num < 0) {
  alert("Negative");
}

// if (num =>0 ) {
//   alert("Positive number");
// } else if (num === 0) {
//   alert("Zero");
// } else if (num < 0) {
//   alert("Negative number");
// } else alert("invalid number");

//Done! The answer was presented in the class
