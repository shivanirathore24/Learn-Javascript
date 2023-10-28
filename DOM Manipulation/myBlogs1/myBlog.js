const blogData = [
  {
    title: "First Blog Post",
    date: "January 1, 2022",
    content: "this is content of the first blog page.",
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

function addBlog(blog) {
  // Create new elements and append them to the blog list
  const blogList = document.querySelector(".blog-list");

  const newBlogPost = document.createElement("div");
  newBlogPost.className = "blog-post";

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

  blogList.appendChild(newBlogPost);
}

blogData.forEach((blog) => addBlog(blog));
