
const postsList = document.querySelector(".blog-posts");
const searhInput = document.querySelector('.search-box');
const addPostPop = document.querySelector(".post-pop");

const openModalBtn = document.getElementById("add_btn");
const closeModalBtn = document.getElementsByClassName("close")[0];
const modal = document.getElementById("post-modal");

openModalBtn.onclick = function () {
  // const titleInput = document.querySelector('.post-pop #name')
  // const imageInput = document.querySelector('.post-pop #image')
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


const renderBlogPost = (post)=> {
  // create the main container element
  const blogPostDiv = document.createElement('div');
  blogPostDiv.classList.add('blog-post');

  // create the image element and set its attributes
  const image = document.createElement('img');
  image.src = post.post_img;
  image.alt = 'Blog Post 1';

  // create the title element and set its text content
  const title = document.createElement('h2');
  title.textContent = post.title;

  // create the post owner container element
  const postOwnerDiv = document.createElement('div');
  postOwnerDiv.classList.add('post-owner');

  // create the user avatar image element and set its attributes
  const userAvatar = document.createElement('img');
  userAvatar.classList.add('user-avatar');
  userAvatar.src = post.img_url;

  // create the user name paragraph element and set its text content
  const userName = document.createElement('p');
  userName.classList.add('user-name');
  userName.textContent = post.name;

  // create the post date paragraph element and set its text content
  const postDate = document.createElement('p');
  postDate.classList.add('post-date');
  postDate.textContent = post.post_date.split('T')[0];

  // append the child elements to the appropriate parent elements
  postOwnerDiv.appendChild(userAvatar);
  postOwnerDiv.appendChild(userName);
  postOwnerDiv.appendChild(postDate);

  blogPostDiv.appendChild(image);
  blogPostDiv.appendChild(title);
  blogPostDiv.appendChild(postOwnerDiv);

  // return the completed element
  return blogPostDiv;
}


// const renderBlogPost = (post) => {

//   const postDiv = document.createElement("article");
//   const postImg = document.createElement("img");
//   postImg.src = post.post_img;
//   postImg.alt = "Blog Post ";
//   postDiv.appendChild(postImg);

//   const blogPost = document.createElement("div");
//   blogPost.className = "blog-post";

//   const h2 = document.createElement("h2");
//   h2.textContent = post.title;
//   blogPost.appendChild(h2);

//   const postDateP = document.createElement("p");
//   postDateP.className = "post-data";
//   postDateP.textContent = post.post_date.split('T')[0];
//   blogPost.appendChild(postDateP);

//   const postOwnerDiv = document.createElement("div");
//   postOwnerDiv.className = "post-owner";

//   const userAvatarImg = document.createElement("img");
//   userAvatarImg.className = "user-avatar";
//   userAvatarImg.src = post.img_url;
//   postOwnerDiv.appendChild(userAvatarImg);

//   const userNameP = document.createElement("p");
//   userNameP.className = "user-name";
//   userNameP.textContent = post.name ;
//   postOwnerDiv.appendChild(userNameP);

//   //const postDateP = document.createElement("p");
//   postDateP.className = "post-date";
//   postDateP.textContent = post.post_date.split('T')[0];
//   postOwnerDiv.appendChild(postDateP);

//   postDiv.appendChild(postOwnerDiv);

//   return postDiv;
// };

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

addPost.addEventListener('click',()=>{
  fetch('/posts',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      title: postTitle.value,
      img_url: postImg.value,
      date: new Date()
    })}).then(
      (result)=>{
        
        return result.json()
      }
    ).then(
      (posts)=>{
        console.log(posts,'55555555555');
        postsList.appendChild(renderBlogPost(posts))
        modal.style.display = "none"
      }
      
    )
  })

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



