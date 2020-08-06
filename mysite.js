const blogForm = document.getElementById("blog-form");

const titleInput = document.getElementById("title-input");

const subtitleInput = document.getElementById("subtitle-input");

const contentInput = document.getElementById("content-input");

const blogContentSectionn = document.getElementsByClassName("blog-content")[0];

blogForm.addEventListener("submit", (e) => {

 e.preventDefault();

 let title = titleInput.value;

 let subtitle = subtitleInput.value;

 let content = contentInput.value;

 let blogEntryHTML = `

 <div class="blog-entry">

   <div class="title">${title}</div>

   <div class="subtitle">${subtitle}</div>

   <div class="content">${content}</div>

 </div>

 `;

 console.log(blogEntryHTML);

 blogContentSectionn.insertAdjacentHTML = ("beforeend", blogEntryHTML);

});