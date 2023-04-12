const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const phoneInput = document.querySelector("#phone");
const avatarInput = document.querySelector("#image");
const roleInput = document.querySelector("#role-input");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");
const tableBody = document.querySelector("#table-body");
const postsList = document.querySelector(".blog-posts");
const searhInput = document.getElementById('search-input-field');
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
  userAvatarImg.src = post.img_url?? '../img/avatar.svg';
  postOwnerDiv.appendChild(userAvatarImg);

  const userNameP = document.createElement("p");
  userNameP.className = "user-name";
  userNameP.textContent = post.name ?? 'kkk';
  postOwnerDiv.appendChild(userNameP);

  //const postDateP = document.createElement("p");
  postDateP.className = "post-date";
  postDateP.textContent = post.post_date.split("T")[0];
  postOwnerDiv.appendChild(postDateP);

  postDiv.appendChild(postOwnerDiv);

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

  searhInput.addEventListener('keyup' , (e)=>{
    fetch('/search',{
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        searchTerm: e.target.value
      })
    }).then((respnse) => respnse.json())
    .then((posts)=>{ 
      
      const handle = (posts)=>{
      postsList.textContent = '';
      
      posts.forEach((post)=>{
        
        postsList.appendChild(renderBlogPost(post))
      })
    }
    handle(posts)
  })
  })


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



