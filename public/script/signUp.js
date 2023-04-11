const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
const { error, log } = require("console");
const { application } = require("express");

// const inputs = document.querySelectorAll(".input");
const signBtn = document.querySelector("#signUp-btn");
const nameInput = document.querySelector("#username");
const passInput = document.querySelector("#password");
const confirmPassInput = document.querySelector("#confirm-pass");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const avatarInput = document.querySelector("#avatar");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

signBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("kkk");
  fetch("/users", {
    headers: {
      "Content-type": "appliction/json",
    },
    method: "POST",
    body: JSON.stringify({
      name: nameInput.value,
      password: passInput.value,
      confirmPassword: confirmPassInput.value,
      emailInput: emailInput.value,
      mobile: phoneInput.value,
      avatarInput: avatarInput.value,
      role: "user",
    }),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
});
