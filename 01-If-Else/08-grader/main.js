// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let score = prompt("Enter your score");
if (score === null || score.trim() === "" || isNaN(score)) {
  alert("Invailid Number");
} else if (score >= 80) {
  alert("A");
} else if (score >= 70 && score <= 79) {
  alert("B");
} else if (score >= 60 && score <= 69) {
  alert("C");
} else if (score >= 50 && score <= 59) {
  alert("D");
} else {
  alert("F");
}

//Done!
