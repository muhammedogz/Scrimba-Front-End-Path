const userSectionEl = document.getElementById("user-section");


async function getUsers() {
    let response = await fetch("users.json");
    let users = await response.json();
    return users;
}

getUsers().then(renderUsers);

function renderUsers(users) {
    let userHtml = "<div class='online-users'>";

    for (const user of users) {
        console.log(user.name);
        userHtml += `<div class="online-user">
        <p class="user-name">${user.name}</p>
        <div class="online-status"></div>\n</div>\n`;
    }
    userHtml += "</div>";
    console.log(userHtml);

    userSectionEl.innerHTML += userHtml;
}