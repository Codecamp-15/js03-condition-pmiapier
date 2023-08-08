// เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators

// ```js
// let login = prompt("Enter username");
// let message;
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

message =
  login == "Employee"
    ? "Hello"
    : login === "Directore"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
alert(message);

//DONE! the short way how to write if-else, the answer is wrong, but I don't know why
