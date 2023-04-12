const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const phoneInput = document.querySelector("#phone");
const avatarInput = document.querySelector("#image");
const roleInput = document.querySelector("#role-input");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");
const tableBody = document.querySelector("#table-body");
const postsList = document.querySelector(".blog-posts");

const popup = document.querySelector(".popup");
const addPostPop = document.querySelector(".post-pop");

const openModalBtn = document.getElementById("add_btn");
const closeModalBtn = document.getElementsByClassName("close")[0];
const modal = document.getElementById("post-modal");

openModalBtn.onclick = function () {
  modal.style.display = "block";
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const renderBlogPost = (post) => {

  const postDiv = document.createElement("article");
  const postImg = document.createElement("img");
  postImg.src = post.post_img;
  postImg.alt = "Blog Post ";
  postDiv.appendChild(postImg);

  const blogPost = document.createElement("div");
  blogPost.className = "blog-post";

  const h2 = document.createElement("h2");
  h2.textContent = post.title;
  blogPost.appendChild(h2);

  const postDateP = document.createElement("p");
  postDateP.className = "post-data";
  postDateP.textContent = post.post_date.split("T")[0];
  blogPost.appendChild(postDateP);

  const postOwnerDiv = document.createElement("div");
  postOwnerDiv.className = "post-owner";

  const userAvatarImg = document.createElement("img");
  userAvatarImg.className = "user-avatar";
  userAvatarImg.src = post.img_url;
  postOwnerDiv.appendChild(userAvatarImg);

  const userNameP = document.createElement("p");
  userNameP.className = "user-name";
  userNameP.textContent = post.name;
  postOwnerDiv.appendChild(userNameP);

  blogPost.appendChild(postOwnerDiv);
  postDiv.appendChild(blogPost);
  console.log(postDiv);
  return postDiv;
};

fetch("/posts")
  .then((result) => result.json())
  .then((result) => {
    postsList.textContent = "";
    result.forEach((item) => {
      postsList.appendChild(renderBlogPost(item));
    });
  });

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

  const phoneTd = document.createElement("td");
  phoneTd.textContent = user.mobile;
  tr.appendChild(phoneTd);

  const roleTd = document.createElement("td");
  roleTd.textContent = user.role;
  tr.appendChild(roleTd);

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
          role: updateRole.value,
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
const addPostPopUp = document.querySelector("#create-post");

const exitPostPop = document.querySelector("#cancel-pop-button");

const addPost = document.querySelector("#add-post");
const postTitle = document.querySelector(".post-pop #name");
const postImg = document.querySelector(".post-pop #image");
// addPostPopUp.addEventListener("click", () => {
//   addPostPop.style.display = "flex";
// });
// exitPostPop.addEventListener("click", () => {
//   addPostPop.style.display = "none";
// });
// addPost.addEventListener("click", () => {

//   fetch("/posts", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       user_id: 1,
//       title: postTitle.value,
//       img_url: postImg.value,
//       date: "2023-04-06",
//     }),
//   }).then((addPostPop.style.display = "none"));
// });


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
      mobile: phoneInput.value,
    }),
  })
    .then((res) => res.json())
    .then((usersData) => {
      usersData.forEach((user) => {
        tableBody.append(createUserRow(user));
      });
    });
});
