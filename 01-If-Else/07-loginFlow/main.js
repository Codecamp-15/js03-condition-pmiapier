// - จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
// - หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
// - หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
// - หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”

let username = prompt("username");

if (username === null || username.trim() == "") {
  alert("username or password is required");
} else {
  if (username === "admin" || username === "john") {
    let password = prompt("password");
    if (password === null || password.trim() == "") {
      alert("username or password is required");
    } else {
      if (
        (username == "admin" && password == "1234") ||
        (username == "john" && password == "qwerty")
      ) {
        alert("Hello " + username);
      } else {
        alert("invalid password");
      }
    }
  } else {
    alert("Invalid username");
  }
}

//Done!
