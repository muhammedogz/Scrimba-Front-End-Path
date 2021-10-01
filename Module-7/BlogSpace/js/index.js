const body = document.getElementById("body");

console.log(body);

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        data = data.slice(0, 5);
        writeBlog(data);
    })



function writeBlog(blog) {
    let bodyHTML = "";

    blog.forEach(item => {
        bodyHTML += `
        <article>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </article>
        `
    });
    console.log(body.innerHTML);
    body.innerHTML += bodyHTML;
    
}





