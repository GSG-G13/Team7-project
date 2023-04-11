const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const avatarInput = document.querySelector("#input-avatar-url");
const submitBtn = document.querySelector("#submitBtn");
const tableBody = document.querySelector("#table-body");
const postsList = document.querySelector('.blog-posts')

const popup = document.querySelector('.popup');
const addPostPop = document.querySelector('.post-pop')

const renderBlogPost = (post)=>{
  
    const postDiv = document.createElement("div");
    postDiv.className = "blog-post";
  
    const img = document.createElement("img");
    img.src = post.post_img;
    img.alt = "Blog Post ";
    postDiv.appendChild(img);
  
    const h2 = document.createElement("h2");
    h2.textContent = post.title;
    postDiv.appendChild(h2);
  
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
  
    const postDateP = document.createElement("p");
    postDateP.className = "post-date";
    postDateP.textContent = post.post_date.splice('T')[0];
    postOwnerDiv.appendChild(postDateP);
  
    postDiv.appendChild(postOwnerDiv);
  
    return postDiv;
  
  
}

fetch('/posts')
.then(result => result.json())
.then((result)=>{
  console.log();(result)
  postsList.textContent = ''
  result.forEach((item)=>{
    postsList.appendChild(renderBlogPost(item))
  })
})


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

  const actionsTd = document.createElement("td");
  actionsTd.classList.add("actions");
  const editSpan = document.createElement("span");
  editSpan.classList.add("edit");
  editSpan.textContent = "Edit";

  actionsTd.appendChild(editSpan);

  const separator = document.createTextNode(" | ");
  actionsTd.appendChild(separator);

  editSpan.addEventListener("click", () => {
    popup.style.display = "block";

    const updateName = document.getElementById("name");
    updateName.value = user.name;
    const updateEmail = document.getElementById("email");
    updateEmail.value = user.email;
    const updateImg = document.getElementById("image");
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

  const separator2 = document.createTextNode(" | ");
  actionsTd.appendChild(separator2);

  const addBlogSpan = document.createElement("span");
  addBlogSpan.classList.add("add-blog");
  addBlogSpan.textContent = "Add blog";
  addBlogSpan.style.cursor = 'pointer'
  
  addBlogSpan.addEventListener('click',()=>{
    addPostPop.style.display = 'block'

    const addPost = document.querySelector('.post-pop button')
    const postTitle = document.querySelector('.post-pop #name')
    const postImg = document.querySelector('.post-pop #image')
    addPost.addEventListener('click', ()=>{

      fetch('/posts',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: user.id,
          title: postTitle.value,
          img_url: postImg.value,
          date: '2023-04-06'
        })
      }).then(addPostPop.style.display = 'none')

    })
    // addPostPop.style.display = 'none'
  })
  actionsTd.appendChild(addBlogSpan);

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
    }),
  })
    .then((res) => res.json())
    .then((usersData) => {
      usersData.forEach((user) => {
        tableBody.append(createUserRow(user));
      });
    });
});


