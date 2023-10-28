function addBlog(blog) {
  // Create new elements and append them to the blog list
  const blogList = document.querySelector(".blog-list");

  const newBox = document.createElement("div");
  newBox.classList.add("blog-box");

  const newBlogPost = document.createElement("div");
  newBlogPost.classList.add("blog-post");
  newBox.appendChild(newBlogPost);

  const newBlogHeader = document.createElement("div");
  newBlogHeader.classList.add("blog-header");
  newBlogPost.appendChild(newBlogHeader);

  const newBlogTitle = document.createElement("h2");
  newBlogTitle.classList.add("blog-title");
  newBlogTitle.textContent = blog.title;
  newBlogHeader.appendChild(newBlogTitle);

  const newBlogDate = document.createElement("p");
  newBlogDate.classList.add("blog-date");
  newBlogDate.textContent = blog.date;
  newBlogHeader.appendChild(newBlogDate);

  const newBlogContent = document.createElement("p");
  newBlogContent.classList.add("blog-content");
  newBlogContent.textContent = blog.content;
  newBlogPost.appendChild(newBlogContent);

  const newBlogButtons = document.createElement("div");
  newBlogButtons.classList.add("blog-buttons");
  newBox.appendChild(newBlogButtons);

  const moveUpButton = document.createElement("button");
  moveUpButton.classList.add("blog-button", "move-up");
  moveUpButton.textContent = "Move Up";
  newBlogButtons.appendChild(moveUpButton);

  const moveDownButton = document.createElement("button");
  moveDownButton.classList.add("blog-button", "move-down");
  moveDownButton.textContent = "Move Down";
  newBlogButtons.appendChild(moveDownButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("blog-button", "delete");
  deleteButton.textContent = "Delete";
  newBlogButtons.appendChild(deleteButton);

  blogList.appendChild(newBox);

  // Add event listeners to the buttons
  moveUpButton.addEventListener("click", () => {
    const previousSibling = newBox.previousElementSibling;
    if (previousSibling) {
      blogList.insertBefore(newBox, previousSibling);
    }
  });

  moveDownButton.addEventListener("click", () => {
    const nextSibling = newBox.nextElementSibling;
    if (nextSibling) {
      blogList.insertBefore(nextSibling, newBox);
    }
  });

  deleteButton.addEventListener("click", () => {
    newBox.remove();
  });
}

const blogData = [
  {
    title: "First Blog Post",
    date: "January 1, 2022",
    content: "This is the content of the first blog post.",
  },
  {
    title: "Second Blog Post",
    date: "February 1, 2022",
    content: "This is the content of the second blog post.",
  },
  {
    title: "Third Blog Post",
    date: "March 1, 2022",
    content: "This is the content of the third blog post.",
  },
];

blogData.forEach((blog) => addBlog(blog)); // Automatically call the function for each blog in the array
