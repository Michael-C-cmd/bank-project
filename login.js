const pwdBtn = document.getElementById("pwd-btn");
pwdBtn.addEventListener("mousedown", () => {
  pwd.type = "text";
});
pwdBtn.addEventListener("mouseup", () => {
  pwd.type = "password";
});

const form = document.getElementById("form");
const submit = document.getElementById("submit");

// ! submit event immer an die Form setzen!, nicht an das Button
form.addEventListener("submit", (e) => {
  let error = false;
  console.log(form.username.value);
  console.log(form.password.value);
  if (form.username.value == "") {
    error = true;
    console.log("Username-Feld darf nicht leer sein!");
  }

  if (form.password.value == "") {
    error = true;
    console.log("Password-Feld darf nicht leer sein!");
  }

  console.log(form.username.checkValidity());

  if (error) {
    e.preventDefault();
  }
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
