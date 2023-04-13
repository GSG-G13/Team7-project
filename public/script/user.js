const tableBody = document.getElementById('table-body')
const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const phoneInput = document.querySelector("#phone");
const avatarInput = document.querySelector("#image");
const roleInput = document.querySelector("#role-input");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");
const popup = document.querySelector(".popup");



function createUserRow(user) {
    const tr = document.createElement("tr");
  
    const idTd = document.createElement("td");
    idTd.textContent = user.id;
    tr.appendChild(idTd);
  
    const avatarTd = document.createElement("td");
    const avatarImg = document.createElement("img");
    avatarImg.src = user.img_url;
    avatarImg.classList.add("avatar");
    avatarTd.appendChild(avatarImg);
    tr.appendChild(avatarTd);
  
    const nameTd = document.createElement("td");
    nameTd.textContent = user.name;
    tr.appendChild(nameTd);
  
    const emailTd = document.createElement("td");
    emailTd.textContent = user.email;
    tr.appendChild(emailTd);
  
    const phoneTd = document.createElement('td');
    phoneTd.textContent = user.mobile
    tr.appendChild(phoneTd)
  
    const roleTd = document.createElement('td');
    roleTd.textContent = user.role
    tr.appendChild(roleTd)
  
    const actionsTd = document.createElement("td");
    actionsTd.classList.add("actions");
    const editSpan = document.createElement("span");
    editSpan.classList.add("edit");
    editSpan.textContent = "Edit";
  
    actionsTd.appendChild(editSpan);
  
    editSpan.addEventListener("click", () => {
      popup.style.display = "block";
      console.log(user);
      const updateName = document.getElementById("user-name");
      updateName.value = user.name;
      const updateEmail = document.getElementById("user-email");
      updateEmail.value = user.email;
      const updatePhone = document.getElementById("user-phone");
      updatePhone.value = user.mobile;
      const updateRole = document.getElementById("user-role");
      updateRole.value = user.role;
      const updateImg = document.getElementById("user-image");
      updateImg.value = user.img_url;
      const updateButton = document.querySelector(".update-button");
  
      updateButton.addEventListener("click", () => {
        fetch("/users", {
          method: "PUT",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
            id: user.id,
            name: updateName.value,
            email: updateEmail.value,
            avatarInput: updateImg.value,
            mobile: updatePhone.value,
            role: updateRole.value
          }),
        }).then(window.location.reload());
      });
    });
  
    const deleteSpan = document.createElement("span");
    deleteSpan.classList.add("delete");
    deleteSpan.textContent = "Delete";
    deleteSpan.onclick = function () {
      fetch(`/users/${user.id}`, {
        method: "DELETE",
      }).then(window.location.reload());
    };
    actionsTd.appendChild(deleteSpan);
  
    // const addBlogSpan = document.createElement("span");
    // addBlogSpan.classList.add("add-blog");
    // addBlogSpan.textContent = "Add blog";
    // addBlogSpan.style.cursor = 'pointer'
  
    // addBlogSpan.addEventListener('click',()=>{
    //   addPostPop.style.display = 'block'
    // create-post
  
    // addPostPop.style.display = 'none'
    // })
    // actionsTd.appendChild(addBlogSpan);
  
    tr.appendChild(actionsTd);
  
    return tr;
  }
  fetch("/hh")
  .then((res) => res.json())
  .then((usersData) => {
    tableBody.textContent = "";
    usersData.forEach((user) => {
      tableBody.append(createUserRow(user));
    });
  });

submitBtn.addEventListener("click", () => {
  fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      emailInput: emailInput.value,
      avatarInput: avatarInput.value,
      password: passwordInput.value,
      role: roleInput.value,
      mobile: phoneInput.value
    }),
  })
    .then((res) => res.json())
    .then((usersData) => {
      usersData.forEach((user) => {
        tableBody.append(createUserRow(user));
      });
    });
});
