const inputs = document.querySelectorAll(".input");
const loginBtn = document.querySelector(".btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

// function addcl() {
//   let parent = this.parentNode.parentNode;
//   parent.classList.add("focus");
// }

// function remcl() {
//   let parent = this.parentNode.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", addcl);
//   input.addEventListener("blur", remcl);
// });

loginBtn.addEventListener("click",()=>{
  console.log('from event');
  fetch("/login",{
    headers: {"Content-type": "application/json"},
    method: "POST",
    body: JSON.stringify({username: username.value,
                          password: password.value })
  }).then(result=>console.log(result)).catch(err=>console.log(err));
})