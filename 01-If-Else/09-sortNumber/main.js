// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

//V.0 show only the highest number
//V.1 Handle different Number
//V.2 Handle same Number


//--V.1--//

let x = +prompt("Enter first number");  //adding + to force the input to be number before assigning to variable (num1)
let y = prompt("Enter second number");
let z = prompt("Enter third number");

//case 1: x highest
// 1A y > z
// 2A z > y

//case 2: y highest
//case 3: z highest

if (x > y && x > z) {
    console.log(`MAX = ${x}`);
} else if (y > x && y > z) {
    console.log(`MAX = ${y}`);
} else if (z > x && z > y) {
    console.log(`MAX = ${z}`);}


 //How can we improve this code?
 //Using DRY Pronciple : Don't Repeat Yourself
    
    let max;
if (x > y && x > z) {
    max = x;
} else if (y > x && y > z) {
    max = y;
} else if (z > x && z > y) {
    max = z;
}

console.log(`MAX = ${max}`);

///// ANother to do it /////
let max;
let mid;
let min;

if (x > y && x > z) {
    max = x;
}  if (y > z) {
    mid = y;
    min = z;
} else {
    mid = z;
    min = y;
}

else if (y > x && y > z) {
    max = y;
    if (x > z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    }
} else if (z > x && z > y) {
    max = z;
    if (x > y) {
        mid = x;
        min = y;
    } else {
        mid = y;
        min = x;
    }
}
console.log(`MAX = ${max}, MID = ${mid}, MIN = ${min}`);





