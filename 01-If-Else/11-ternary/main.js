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
let login = prompt("Enter username ");
let message =
  login == "Employee" //if login == "Employee" then message = "Hello"
    ? "Hello"
    : login == "Director" //if login == "Director" then message = "Greetings"
    ? "Greetings"
    : login == "" //if login == "" then message = "No login"
    ? "No login"
    : ""; //otherwise message = ""
alert(message);

//DONE! the short way how to write if-else
