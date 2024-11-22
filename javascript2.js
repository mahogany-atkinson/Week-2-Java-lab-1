let blogPosts = [
  { id: 1, title: "Blog Post 0", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 1", author: "Author B", date: "2023-12-01" },
  { id: 3, title: "Blog Post 2", author: "Author C", date: "2023-01-11" },
  { id: 4, title: "Blog Post 3", author: "Author D", date: "2023-12-13" },
  { id: 5, title: "Blog Post 4", author: "Author E", date: "2023-09-14" },
];
function Books(){
  const CardContainer = document.getElementById("CardContainer");
CardContainer.innerHTML = (
`<div class="card" style="width: 18rem;">
<div class="card-body">
    <div class="card-body">
      <h5 class="card-title">${blogPosts[0].title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        ${blogPosts[0].author}
      </h6>
      <p class="card-text">${blogPosts[0].date}</p>
    </div>`
);
}
Books()
