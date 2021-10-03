const main = document.querySelector("main");

const postForm = document.getElementById("post-form");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const btn = document.getElementById("post-submit");

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        data = data.slice(0, 5);
        writeBlog(data);
    });


function writeBlog(blog) {
    let mainHTML = "";

    blog.forEach(item => {
        mainHTML += `
        <article>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </article>
        `;
    });
    main.innerHTML += mainHTML;
}

postForm.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log("clicked");
    main.innerHTML += `<article>
            <h2>${postTitle.value}</h2>
            <p>${postBody.value}</p>
        </article>
        `;
});





