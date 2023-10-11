/*
SOCIAL MEDIA
You are tasked with developing a social media platform where users can create accounts, make posts, and 
interact with those posts. Your goal is to implement the necessary classes and functionalities to fulfill 
the requirements of the platform.

Objective:

Upper Class:
The User class should have  the following private properties.
   - name (string)
   - email(string)
   - password(String)
   - posts (an array of posts)
It should have a constructor method that accepts name, email, and password as parameters and initializes 
them accordingly, and it should also initialize posts with an empty array. Implement getters and setters 
for name, email, and password properties.
The User class should have the following methods
   - addPost: It takes a post object and appends it to the posts array.
   - deletePost: It takes a post object and remove it from the posts array.
   - displayPosts: It should console the title of all posts present in the posts array.

Post Class:
The Post class should inherit from the User class.
It should have the following private properties
   - title(String)
   - content (string)
   - date (String)
   - likeCount (number)
The constructor method should accept the owner's name, email, password, title, content, and date as 
parameters and initialize the properties accordingly. It should initialize the likeCount with 0.
Implement getters and setters for title, content, and date properties.
The Post class should have the following method
   - addLike : It should increment the likeCount of the post.
   -displayDetails: It should print the post'd details inheriting from the User class in key-value pair which includes the owner's name, title, content, date, and likeCount.

Note:
The name of the getter setter should be the name of the property it is accessing or modifying.
For eg, The name of the getter and setter for the property name should be "name"
Please refer to the scaffold for the expected output. 
*/

function main() {
  class User {
    #name;
    #email;
    #password;
    #posts;
    constructor(name, email, password) {
      this.#name = name;
      this.#email = email;
      this.#password = password;
      this.#posts = [];
    }

    get name() {
      return this.#name;
    }

    set name(name) {
      this.#name = name;
    }

    get email() {
      return this.#email;
    }

    set email(email) {
      this.#email = email;
    }

    get password() {
      return this.#password;
    }

    set password(password) {
      this.#password = password;
    }

    addPost(post) {
      this.#posts.push(post);
    }

    deletePost(post) {
      const index = this.#posts.indexOf(post);
      if (index !== -1) {
        this.#posts.splice(index, 1);
      }
    }
    displayPosts() {
      console.log(`Posts by ${this.#name}:`);
      this.#posts.forEach((post) => {
        console.log(`- ${post.title}`);
      });
    }
  }

  class Post extends User {
    #title;
    #content;
    #date;
    #likeCount;
    constructor(name, email, password, title, content, date) {
      super(name, email, password);
      this.#title = title;
      this.#content = content;
      this.#date = date;
      this.#likeCount = 0;
    }

    get title() {
      return this.#title;
    }

    set title(title) {
      this.#title = title;
    }

    get content() {
      return this.#content;
    }

    set content(content) {
      this.#content = content;
    }

    get date() {
      return this.#date;
    }

    set date(date) {
      this.#date = date;
    }

    get likeCount() {
      return this.#likeCount;
    }

    addLike() {
      this.#likeCount++;
    }

    displayDetails() {
      console.log(`Owner: ${this.name}`);
      console.log(`Title: ${this.#title}`);
      console.log(`Content: ${this.#content}`);
      console.log(`Date: ${this.#date}`);
      console.log(`Likes: ${this.#likeCount}`);
    }
  }
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01"
  );
  const post2 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02"
  );

  user1.addPost(post1);
  user1.addPost(post2);

  post1.addLike();
  post1.addLike();

  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post

  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  return { User, Post };
}
main();
