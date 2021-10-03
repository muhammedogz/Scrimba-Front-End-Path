const main = document.querySelector("main");

const postForm = document.getElementById("post-form");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const btn = document.getElementById("post-submit");

let posts = [];

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
	.then((res) => res.json())
	.then((data) => {
		posts = data.slice(0, 5);
		renderBlog(posts);
	});

function renderBlog(blog) {
	let mainHTML = "";

	blog.forEach((item) => {
		mainHTML += `
        <article>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </article>
        `;
	});
	main.innerHTML = mainHTML;
}

postForm.addEventListener("submit", (e) => {
	e.preventDefault();

    // create new object that keeps entered values
	const newPost = {
        title: postTitle.value,
        body: postBody.value
    };

    // send new post to server 
    // probably this is not working

    // options object
    const options = {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(post => {
        // add new post to html
        posts.unshift(post);
        renderBlog(posts);

    });


    // clear values
    postTitle.value = "";
    postBody.value = "";

});
