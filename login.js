const pwd = document.getElementById("pwd");
const pwdBtn = document.getElementById("pwd-btn");
const username = document.getElementById("username");
const loginBtb = document.getElementById("login-btn");
pwdBtn.addEventListener("mousedown", () => {
  pwd.type = "text";
});
pwdBtn.addEventListener("mouseup", () => {
  pwd.type = "password";
});
loginBtb.addEventListener("click", () => {
  username.value !== "" && pwd.value !== ""
    ? alert("Willkommen bei Sparda!")
    : alert("Bitte Username und Password eingeben!");
});

username.addEventListener("blur", () => {
  if (username.value == "") {
    username.style.borderColor = "red";
  } else {
    username.style.borderColor = "green";
  }
});

pwd.addEventListener("blur", () => {
  if (pwd.value == "") {
    pwd.style.borderColor = "red";
  }
});
