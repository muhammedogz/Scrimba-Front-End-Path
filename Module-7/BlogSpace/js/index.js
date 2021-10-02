const main = document.querySelector("main");

console.log(main);

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        data = data.slice(0, 5);
        writeBlog(data);
    })



function writeBlog(blog) {
    let mainHTML = "";

    blog.forEach(item => {
        mainHTML += `
        <article>
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </article>
        `
    });
    main.innerHTML += mainHTML;
    
}





