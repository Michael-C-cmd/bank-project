const pwdBtn = document.getElementById("pwd-btn");
pwdBtn.addEventListener("mousedown", () => {
  pwd.type = "text";
});
pwdBtn.addEventListener("mouseup", () => {
  pwd.type = "password";
});

// username.addEventListener("blur", () => {
//   if (username.value == "") {
//     username.style.borderColor = "red";
//   } else {
//     username.style.borderColor = "green";
//   }
// });

// pwd.addEventListener("blur", () => {
//   if (pwd.value == "") {
//     pwd.style.borderColor = "red";
//   }
// });
