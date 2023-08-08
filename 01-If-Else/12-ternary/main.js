// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let score = prompt("Enter your score");
let grade =
  score == null || score.trim() == "" || isNaN(score)
    ? "invalid score"
    : score >= 80
    ? "A"
    : score >= 70
    ? "B"
    : score >= 60
    ? "C"
    : score >= 50
    ? "D"
    : "F"; //otherwise
alert(grade);

//Done!
